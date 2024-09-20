from django.contrib import admin
from website.models import *
# Register your models here.

admin.site.register(Persona)
admin.site.register(Direccion)
admin.site.register(Factura)
admin.site.register(Horario)
admin.site.register(Producto)
admin.site.register(Pedido)
admin.site.register(ProductoPedido)
admin.site.register(Tema)
admin.site.register(TemaUsuario)
admin.site.register(Estilo)