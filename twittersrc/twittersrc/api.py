from rest_framework import routers
from poortwitter import api_views as views

router = routers.DefaultRouter()
router.register(r'tweet', views.TweetViewset)
