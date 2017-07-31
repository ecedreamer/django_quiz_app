from django.db import models

# Create your models here.
class Quiz(models.Model):
	question = models.CharField(max_length = 500)
	option1 = models.CharField(max_length = 20)
	option2 = models.CharField(max_length = 20)
	option3 = models.CharField(max_length = 20)
	option4 = models.CharField(max_length = 20)
	answer = models.CharField(max_length = 20)
