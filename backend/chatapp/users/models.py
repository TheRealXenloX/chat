from django.db import models


class User(models.Model):
    username = models.CharField()
    email = models.EmailField()
    password = models.CharField()
