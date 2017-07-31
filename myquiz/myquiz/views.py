from django.shortcuts import render

def index(request):
	return render(request, 'index.html')

def questions(request):
	return render(request, 'quiz.html')

def login(request):
	return render(request, 'username.html')

