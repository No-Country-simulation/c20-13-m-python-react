from django.db import models

from django.utils import timezone





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
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

# Modelo Pedido
class Pedido(models.Model):
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    fecha_pedido = models.DateField(auto_now_add=True)
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return f"Pedido {self.id} de {self.usuario}"

# Modelo ProductoPedido (Relación Productos x Pedidos)
class ProductoPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    def __str__(self):
        return f"{self.cantidad}x {self.producto.nombre}"

# Modelo Factura
class Factura(models.Model):
    numero_factura = models.CharField(max_length=50)
    fecha_factura = models.DateField(default=timezone.now)  # Elimina el default
    direccion_envio = models.TextField()
    medio_pago = models.CharField(max_length=100)
    precio_final = models.DecimalField(max_digits=10, decimal_places=2)
    estado_factura = models.BooleanField(default=False)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    horario = models.ForeignKey('Horario', on_delete=models.CASCADE)


    def __str__(self):
        return f"Factura {self.id} - Pedido {self.pedido.id}"

# Modelo Horario
class Horario(models.Model):
    dia_semana = models.CharField(max_length=20)
    hora_inicio = models.TimeField()
    hora_cierre = models.TimeField()
    activo = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.dia_semana} ({self.hora_inicio} - {self.hora_cierre})"

# Modelo Direccion
class Direccion(models.Model):
    calle = models.CharField(max_length=200)
    altura = models.CharField(max_length=50)
    piso = models.CharField(max_length=10, blank=True, null=True)
    departamento = models.CharField(max_length=10, blank=True, null=True)
    localidad = models.ForeignKey('Localidad', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.calle} {self.altura}"

# Modelo Localidad
class Localidad(models.Model):
    nombre = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=20)
    departamento = models.ForeignKey('Departamento', on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

# Modelo Ciudad
class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre

# Modelo Persona
class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    correo = models.EmailField()
    direccion = models.ForeignKey(Direccion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

# Modelo Usuario
class Usuario(models.Model):
    usuario = models.CharField(max_length=100)
    contraseña = models.CharField(max_length=100)
    rol = models.BooleanField(default=False)
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario

# Modelo LocalidadCiudad (Relación Localidades x Ciudades)
class LocalidadCiudad(models.Model):
    localidad = models.ForeignKey(Localidad, on_delete=models.CASCADE)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.localidad} - {self.ciudad}"

# Modelo Departamento
class Departamento(models.Model):
    nombre = models.CharField(max_length=100)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

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
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"Tema {self.tema} - Usuario {self.usuario}"

# Modelo Estilo
class Estilo(models.Model):
    quienes_somos = models.TextField()
    logo = models.URLField()
    politicas = models.TextField()
    tema = models.ForeignKey(Tema, on_delete=models.CASCADE)

    def __str__(self):
        return f"Estilo para el tema {self.tema}"
