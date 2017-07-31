from django.conf.urls import url
import quiz.views as quiz_views

urlpatterns = [
	url(r'^$', quiz_views.qpage),
	
]
