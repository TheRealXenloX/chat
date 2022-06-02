from django.db import models


class User(models.Model):
    id = models.IntegerField(unique=True)
    email = models.EmailField()
    username = models.TextField()
    password = models.TextField()
