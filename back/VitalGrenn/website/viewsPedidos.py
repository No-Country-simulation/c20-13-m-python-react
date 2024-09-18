from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pedido, Producto, ProductoPedido, Factura, Horario
from .serializers import PedidoSerializer, AgregarProductoSerializer, FacturaSerializer
from rest_framework.permissions import IsAuthenticated


#Vista para obtener el pedido Actual
class CarritoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        
        print(request.user)
        # Obtiene el pedido actual del usuario (si existe y no está finalizado)
        pedido = Pedido.objects.filter(usuario=request.user, finalizado=False).first()
        if not pedido:
            return Response({"detalle": "No hay pedido activo."}, status=status.HTTP_404_NOT_FOUND)

        serializer = PedidoSerializer(pedido)
        return Response(serializer.data)

#Vista para agregar productos al carrito o para modificar la cantidad
class AgregarProductoCarritoView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = AgregarProductoSerializer(data=request.data)
        if serializer.is_valid():
            producto_id = serializer.validated_data['producto_id']
            cantidad = serializer.validated_data['cantidad']
            
            # Verifica si ya existe un pedido activo
            pedido, created = Pedido.objects.get_or_create(usuario=request.user, finalizado=False)
            
            # Agregar o actualizar el producto en el carrito
            producto = Producto.objects.get(id=producto_id)
            productopedido, created = ProductoPedido.objects.get_or_create(pedido=pedido, producto=producto, defaults={'cantidad': cantidad})
            
            # Reemplaza la cantidad en lugar de sumarla
            productopedido.cantidad = cantidad

            productopedido.save()
            return Response({"detalle": "Producto agregado/actualizado."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Vista para eliminar por completo un producto del carrito
class EliminarProductoCarritoView(APIView):
    permission_classes = [IsAuthenticated]
    
    def delete(self, request, producto_id):
        # Busca el pedido activo
        pedido = Pedido.objects.filter(usuario=request.user, finalizado=False).first()
        if not pedido:
            return Response({"detalle": "No hay pedido activo."}, status=status.HTTP_404_NOT_FOUND)
        
        # Intenta eliminar el producto del pedido
        try:
            productopedido = ProductoPedido.objects.get(pedido=pedido, producto_id=producto_id)
            productopedido.delete()
            return Response({"detalle": "Producto eliminado."}, status=status.HTTP_204_NO_CONTENT)
        except ProductoPedido.DoesNotExist:
            return Response({"detalle": "Producto no encontrado en el pedido."}, status=status.HTTP_404_NOT_FOUND)
        
#Vista para cerrar el carrito       
class FinalizarPedidoView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request, pedido_id):
        informacion = request.data
        try:
            pedido = Pedido.objects.get(id=pedido_id, usuario=request.user, finalizado=False)
        except Pedido.DoesNotExist:
            return Response({"detalle": "Pedido no encontrado o ya finalizado."}, status=status.HTTP_404_NOT_FOUND)
        

        # Asignar los campos de la solicitud al pedido
        direccion_envio = informacion.get('direccion_envio')
        medio_pago = informacion.get('medio_pago')
        horario = informacion.get('horario')

        # Validar que los campos no estén vacíos
        if not (direccion_envio and medio_pago and horario):
            return Response({"detalle": "Debe proporcionar una dirección de envío, un horario y un medio de pago."}, status=status.HTTP_400_BAD_REQUEST)

        #Obtener la Fk de horario
        horario = Horario.objects.get(id=horario)
        # Asignar los valores al pedido
        pedido.direccion_envio = direccion_envio
        pedido.medio_pago = medio_pago
        pedido.horario_entrega = horario
        
        # Marcar el pedido como finalizado
        pedido.finalizado = True
        pedido.save()
        return Response({"detalle": "Pedido finalizado con éxito."}, status=status.HTTP_200_OK)
    
    
class FacturaDetailView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pedido_id):
        try:
            # Busca la factura relacionada al pedido
            factura = Factura.objects.get(pedido_id=pedido_id)
            serializer = FacturaSerializer(factura)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Factura.DoesNotExist:
            return Response({"error": "Factura no encontrada."}, status=status.HTTP_404_NOT_FOUND)