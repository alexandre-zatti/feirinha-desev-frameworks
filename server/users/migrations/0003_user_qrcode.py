# Generated by Django 4.0.4 on 2022-05-15 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_feirante_alter_user_matricula'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='qrcode',
            field=models.CharField(max_length=10000, null=True),
        ),
    ]
