from django.db import models
from .user import User

from products.models import Product


class History(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=False)
    quantidade = models.IntegerField(default=0, blank=False)
    total = models.FloatField(default=0.00, blank=False)
    data_compra = models.DateField(blank=False)

