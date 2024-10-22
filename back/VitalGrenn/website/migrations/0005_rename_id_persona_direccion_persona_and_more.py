# Generated by Django 5.1.1 on 2024-09-10 22:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_remove_departamento_ciudad_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='direccion',
            old_name='id_persona',
            new_name='persona',
        ),
        migrations.RemoveField(
            model_name='factura',
            name='horario',
        ),
        migrations.AddField(
            model_name='pedido',
            name='horario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='website.horario'),
        ),
        migrations.AddField(
            model_name='pedido',
            name='productos',
            field=models.ManyToManyField(related_name='pedidos', through='website.ProductoPedido', to='website.producto'),
        ),
        migrations.AlterField(
            model_name='estilo',
            name='tema',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='website.tema'),
        ),
        migrations.AlterField(
            model_name='horario',
            name='dia_semana',
            field=models.CharField(choices=[('Lunes', 'Lunes'), ('Martes', 'Martes'), ('Miércoles', 'Miércoles'), ('Jueves', 'Jueves'), ('Viernes', 'Viernes'), ('Sábado', 'Sábado'), ('Domingo', 'Domingo')], max_length=20),
        ),
        migrations.AlterField(
            model_name='producto',
            name='categoria',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='website.categoria'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='usuario',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AddConstraint(
            model_name='productopedido',
            constraint=models.UniqueConstraint(fields=('pedido', 'producto'), name='unique_producto_pedido'),
        ),
    ]
