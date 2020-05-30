from django.db import models

from django.contrib.auth.models import User

class newSchedule(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=100)

class Subject(models.Model):
    subject = models.CharField(max_length=255)
    last_update = models.DateTimeField(auto_now_add=True)
    schedule = models.ForeignKey(newSchedule, related_name='subjects', on_delete=models.CASCADE)
    starter = models.ForeignKey(User, related_name='subjects', on_delete=models.CASCADE)

class Comment(models.Model):
    message = models.TextField(max_length=4000)
    subject = models.ForeignKey(Subject, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_by = models.ForeignKey(User, null=True, related_name='+', on_delete=models.CASCADE)
    created_at = models.ForeignKey(User, null=True, related_name='+', on_delete=models.CASCADE)
# Create your models here.
