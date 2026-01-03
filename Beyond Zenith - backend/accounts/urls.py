# Auth-related endpoints
# urls.py
from django.urls import path
from rest_framework.authtoken import views

urlpatterns = [
    # ... other url patterns
    path('api-token-auth/', views.obtain_auth_token, name='api_token_auth'),
]
