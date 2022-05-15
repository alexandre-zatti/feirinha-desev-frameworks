from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    quantidade = models.IntegerField(default=0)
    preco = models.FloatField(default=0.00)
    thumbnail = models.CharField(max_length=255, null=True)

