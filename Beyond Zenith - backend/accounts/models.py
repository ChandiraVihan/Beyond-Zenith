from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    profile_picture = models.URLField(blank=True, null=True)

    #profile_picture = models.ImageField(upload_to='profiles/', blank=True)
    google_id = models.CharField(max_length=255, blank=True, unique=True)

def __str__(self):
        return self.email