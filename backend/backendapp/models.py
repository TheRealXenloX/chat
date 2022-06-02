from django.db import models


class Users(models.Model):
    email = models.EmailField()
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=128)
