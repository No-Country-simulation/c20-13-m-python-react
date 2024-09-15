from rest_framework import viewsets, generics
from rest_framework.response import Response
from website.serializers import PersonaSerializer, RegisterSerializer, DireccionSerializer, ProductoSerializer, HorarioSerializer
from website.models import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.decorators import permission_classes

# Create your views here.
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # Incluye la información del usuario con los datos de Persona en la respuesta
            user_data = RegisterSerializer(user).data

            return Response({
                'user': user_data,
                'message': 'User registered successfully'
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class PersonasView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer
    
    
class PersonalInfoView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        usuario = User.objects.get(username=request.user)
        personalInfo = Persona.objects.get(user=usuario)
        serializer = PersonaSerializer(personalInfo)
        return Response(serializer.data)
    
class DireccionView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        usuario = User.objects.get(username=request.user)
        direccion = Direccion.objects.filter(persona=usuario.persona )
        
        serializer = DireccionSerializer(direccion, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = DireccionSerializer(data=request.data, context={'request': request})
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class ProductosView(viewsets.ModelViewSet):
    queryset = Producto.objects.all()   
    serializer_class = ProductoSerializer
    
    def get_permissions(self):
        # Para solicitudes de lectura (GET, HEAD, OPTIONS), permitir acceso a cualquiera
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        # Para las solicitudes de modificación (PUT, PATCH, DELETE), permitir solo a admin
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
    
class HorariosView(viewsets.ModelViewSet):
    queryset = Horario.objects.all()
    serializer_class = HorarioSerializer
    
    def get_permissions(self):
        # Para solicitudes de lectura (GET, HEAD, OPTIONS), permitir acceso a cualquiera
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        # Para las solicitudes de modificación (PUT, PATCH, DELETE), permitir solo a admin
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]