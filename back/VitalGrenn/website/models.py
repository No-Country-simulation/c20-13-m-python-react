from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone



# Modelo Horario
class Horario(models.Model):
    DIA_SEMANA_CHOICES = [
    ('Lunes', 'Lunes'),
    ('Martes', 'Martes'),
    ('Miércoles', 'Miércoles'),
    ('Jueves', 'Jueves'),
    ('Viernes', 'Viernes'),
    ('Sábado', 'Sábado'),
    ('Domingo', 'Domingo'),
]
    dia_semana = models.CharField(max_length=20, choices=DIA_SEMANA_CHOICES)
    hora_inicio = models.TimeField()
    hora_cierre = models.TimeField()
    activo = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.dia_semana} ({self.hora_inicio} - {self.hora_cierre}) {self.id}"
    
# Modelo Categoria
class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre

# Modelo Producto
class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.URLField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.nombre

# Modelo Pedido
class Pedido(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    direccion_envio = models.TextField()
    medio_pago = models.CharField(max_length=100)
    fecha_pedido = models.DateField(auto_now_add=True)
    horario_entrega = models.ForeignKey(Horario, on_delete=models.SET_NULL, null=True, blank=True)
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return f"Pedido {self.id} de {self.usuario}"

# Modelo ProductoPedido (Relación Productos x Pedidos)
class ProductoPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.FloatField()

    def __str__(self):
        return f"{self.producto.nombre} x{self.cantidad} || {self.pedido}"
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['pedido', 'producto'], name='unique_producto_pedido')
        ]

# Modelo Factura
class Factura(models.Model):
    PENDIENTE = 'P'
    EN_PROCESO = 'E'
    COMPLETADO = 'C'
    
    ESTADO_CHOICES = [
        (PENDIENTE, 'Pendiente'),
        (EN_PROCESO, 'En proceso'),
        (COMPLETADO, 'Completado'),
    ]
    numero_factura = models.CharField(max_length=50, unique=True)
    fecha_factura = models.DateField(auto_now_add=True)  # Elimina el default
    precio_final = models.DecimalField(max_digits=10, decimal_places=2)
    estado_factura = models.CharField(max_length=1,default=PENDIENTE,choices=ESTADO_CHOICES)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)


    def __str__(self):
        return f"{self.numero_factura} - Pedido {self.pedido.id} - Estado {self.estado_factura}"


# Modelo Persona
class Persona(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    correo = models.EmailField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


# Modelo Direccion
class Direccion(models.Model):
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, null=True)
    calle = models.CharField(max_length=200, blank=True, null=True)
    numero = models.CharField(max_length=5, blank=True, null=True)
    piso = models.CharField(max_length=10, blank=True, null=True)
    departamento = models.CharField(max_length=10, blank=True, null=True)
    localidad = models.CharField(max_length=50, blank=True, null=True)
    codigo_postal =models.CharField(max_length=4, null=True, blank=True)
    provincia = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.calle} {self.numero}"


# Modelo Tema
class Tema(models.Model):
    tema = models.CharField(max_length=100)
    color_primario = models.CharField(max_length=7)
    color_secundario = models.CharField(max_length=7)
    color_terciario = models.CharField(max_length=7)
    color_background = models.CharField(max_length=7)
    color_fuente = models.CharField(max_length=7)

    def __str__(self):
        return self.tema

# Modelo TemaUsuario (Relación Temas x Usuarios)
class TemaUsuario(models.Model):
    tema = models.ForeignKey(Tema, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Tema {self.tema} - Usuario {self.usuario}"

# Modelo Estilo
class Estilo(models.Model):
    quienes_somos = models.TextField()
    logo = models.URLField()
    politicas = models.TextField()
    tema = models.OneToOneField(Tema, on_delete=models.CASCADE)

    def __str__(self):
        return f"Estilo para el tema {self.tema}"
