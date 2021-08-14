from rest_framework import viewsets
from . import models
from . import serializers


class TweetViewset(viewsets.ModelViewSet):
    queryset = models.Tweet.objects.all()
    serializer_class = serializers.TweetSerializer
