from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=255)
    matricula = models.IntegerField(unique=True, primary_key=True)
    feirante = models.BooleanField(default=False)
    qrcode = models.CharField(max_length=10000, null=True)
    saldo = models.FloatField(default=0.00)
    password = None
    email = None

    USERNAME_FIELD = 'matricula'
    REQUIRED_FIELDS = []
