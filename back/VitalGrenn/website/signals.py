from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import transaction
from website.models import Factura,Pedido

@receiver(post_save, sender=Pedido)
def crear_factura(sender, instance, **kwargs):
    if instance.finalizado:
        with transaction.atomic():
            # Verificar si ya existe una factura para este pedido
            if not hasattr(instance, 'factura'):
                Factura.objects.create(
                    numero_factura=f'FAC-{instance.id}',
                    precio_final=sum(p.cantidad * p.producto.precio for p in instance.productopedido_set.all()),
                    pedido=instance
                )