# Generated by Django 5.1 on 2024-09-09 18:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='categoria',
        ),
        migrations.RemoveField(
            model_name='localidad',
            name='ciudad',
        ),
        migrations.RemoveField(
            model_name='direccion',
            name='localidad',
        ),
        migrations.RemoveField(
            model_name='persona',
            name='direccion',
        ),
        migrations.RemoveField(
            model_name='factura',
            name='horario',
        ),
        migrations.RemoveField(
            model_name='factura',
            name='pedido',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='productopedido',
            name='pedido',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='persona',
        ),
        migrations.RemoveField(
            model_name='productopedido',
            name='producto',
        ),
        migrations.DeleteModel(
            name='Categoria',
        ),
        migrations.DeleteModel(
            name='Ciudad',
        ),
        migrations.DeleteModel(
            name='Localidad',
        ),
        migrations.DeleteModel(
            name='Direccion',
        ),
        migrations.DeleteModel(
            name='Horario',
        ),
        migrations.DeleteModel(
            name='Factura',
        ),
        migrations.DeleteModel(
            name='Pedido',
        ),
        migrations.DeleteModel(
            name='Persona',
        ),
        migrations.DeleteModel(
            name='Usuario',
        ),
        migrations.DeleteModel(
            name='Producto',
        ),
        migrations.DeleteModel(
            name='ProductoPedido',
        ),
    ]
