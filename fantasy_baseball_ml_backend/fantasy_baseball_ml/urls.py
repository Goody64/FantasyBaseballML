# urls.py in your Django app

from django.urls import path
from . import views

urlpatterns = [
    # ... other url patterns
    path('api/player_stats', views.player_stats, name='player_stats'),
]
