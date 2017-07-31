from rest_framework import serializers
from quiz.models import Quiz

class QuizApiSerializer(serializers.ModelSerializer):

	class Meta:
		model = Quiz
		fields = '__all__'