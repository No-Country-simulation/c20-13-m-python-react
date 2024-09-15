from website.models import *
from rest_framework import serializers
from django.contrib.auth.models import User
    


class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = '__all__'
        
        
    def create(self, validated_data):
        # Obtenemos el usuario desde el contexto
        user = self.context['request'].user
        # `Persona` tiene una relación OneToOne con `User`
        persona = Persona.objects.get(user=user)

        # Asignamos la persona a la dirección
        validated_data['persona'] = persona

        # Creamos la dirección con los datos validados
        return Direccion.objects.create(**validated_data)


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ['nombre', 'apellido', 'telefono', 'correo']
        
    
class HorarioSerializer(serializers.ModelSerializer):
    descripcion = serializers.SerializerMethodField()  # Campo personalizado

    class Meta:
        model = Horario
        fields = ['id','dia_semana', 'hora_inicio', 'hora_cierre', 'activo', 'descripcion']  # Incluimos 'descripcion'

    def get_descripcion(self, obj):
        return f"{obj.dia_semana} ({obj.hora_inicio} - {obj.hora_cierre})"
        
class HorarioViewSerializer(serializers.ModelSerializer):
    descripcion = serializers.SerializerMethodField()  # Campo personalizado

    class Meta:
        model = Horario
        fields = ['descripcion']  # Incluimos 'descripcion'

    def get_descripcion(self, obj):
        return f"{obj.dia_semana} ({obj.hora_inicio} - {obj.hora_cierre})"
        
class RegisterSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name', 'persona']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        persona_data = validated_data.pop('persona')
        
        # Create User instance
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        
        # Create Persona instance and associate it with the User
        Persona.objects.create(user=user, **persona_data)
        
        return user

    
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
        
class ProductoPedidoSerializer(serializers.ModelSerializer):
    producto = serializers.StringRelatedField()  # O puedes usar un serializer para Producto
    
    class Meta:
        model = ProductoPedido
        fields = ['producto', 'cantidad']

class PedidoSerializer(serializers.ModelSerializer):
    productos = ProductoPedidoSerializer(source='productopedido_set', many=True)
    horario_entrega = HorarioViewSerializer()  # Incluir el serializador de Horario
    
    class Meta:
        model = Pedido
        fields = ['id', 'usuario', 'direccion_envio', 'fecha_pedido', 'finalizado', 'horario_entrega','productos']


class AgregarProductoSerializer(serializers.Serializer):
    producto_id = serializers.IntegerField()
    cantidad = serializers.IntegerField()

    def validate(self, data):
        # Valida que el producto exista y tenga stock suficiente
        producto_id = data.get('producto_id')
        cantidad = data.get('cantidad')
        try:
            producto = Producto.objects.get(id=producto_id)
            if producto.stock < cantidad:
                raise serializers.ValidationError("No hay suficiente stock disponible.")
        except Producto.DoesNotExist:
            raise serializers.ValidationError("Producto no encontrado.")
        
        return data
    
class FacturaSerializer(serializers.ModelSerializer):
    pedido = PedidoSerializer()

    class Meta:
        model = Factura
        fields = ['numero_factura', 'fecha_factura', 'precio_final', 'estado_factura', 'pedido']