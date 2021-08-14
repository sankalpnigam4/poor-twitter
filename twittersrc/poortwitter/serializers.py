from rest_framework import serializers
from . import models


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tweet
        fields = ('id', 'name', 'text', 'date_time')
