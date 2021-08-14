from django.db import models

# Create your models here.
from django.db import models


class Tweet(models.Model):
    text = models.CharField(max_length=50)
    date_time = models.DateTimeField()
    name = models.CharField(max_length=20)
    objects = models.Manager()
