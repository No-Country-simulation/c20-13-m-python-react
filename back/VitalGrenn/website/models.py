from django.db import models

# Create your models here.

class Categoria(models.Model):
    categoria = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.categoria

class Producto(models.Model):
    producto = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.URLField()
    precio = models.IntegerField()
    stock = models.IntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.producto

class Usuario(models.Model):
    usuario = models.CharField(max_length=100)
    contraseña = models.CharField(max_length=100)
    rol = models.BooleanField()
    persona = models.ForeignKey('Persona', on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    correo = models.EmailField()
    direccion = models.ForeignKey('Direccion', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Direccion(models.Model):
    calle = models.CharField(max_length=100)
    altura = models.CharField(max_length=10)
    piso = models.CharField(max_length=10, blank=True, null=True)
    departamento = models.CharField(max_length=10, blank=True, null=True)
    localidad = models.ForeignKey('Localidad', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.calle} {self.altura}"

class Localidad(models.Model):
    localidad = models.CharField(max_length=100)
    ciudad = models.ForeignKey('Ciudad', on_delete=models.CASCADE)

    def __str__(self):
        return self.localidad

class Ciudad(models.Model):
    ciudad = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=10)

    def __str__(self):
        return self.ciudad

class Horario(models.Model):
    dia_semana = models.CharField(max_length=20)
    hora_inicio = models.TimeField()
    hora_cierre = models.TimeField()
    activo = models.BooleanField()

    def __str__(self):
        return f"{self.dia_semana} ({self.hora_inicio} - {self.hora_cierre})"

class Pedido(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return f"Pedido {self.id} de {self.usuario}"

class ProductoPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    def __str__(self):
        return f"{self.cantidad}x {self.producto.producto}"

class Factura(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    direccion_envio = models.TextField()
    precio_final = models.IntegerField()
    horario = models.ForeignKey(Horario, on_delete=models.CASCADE)

    def __str__(self):
        return f"Factura {self.id} - Pedido {self.pedido.id}"