# Auth-related endpoints
# urls.py
from django.urls import path,include
from rest_framework.authtoken import views

urlpatterns = [
    # ... other url patterns
    path('api/auth/', include('dj_rest_auth.urls')),


    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
]
