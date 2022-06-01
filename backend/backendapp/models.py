from django.db import models


class NewUser(models.Model):
    email = models.EmailField()
    username = models.TextField()
    password = models.TextField()