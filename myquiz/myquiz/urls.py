from django.conf.urls import url, include
from django.contrib import admin
from myquiz import views as index_views
from rest_framework.urlpatterns import format_suffix_patterns
from quizapi import views

urlpatterns = [
	url(r'^$', index_views.index),
	url(r'^login/$', index_views.login),
	url(r'^questions/', include('quiz.urls')),
	url(r'^quizapi/', views.QuizApiList.as_view()),
    url(r'^admin/', admin.site.urls),
]

urlpatterns = format_suffix_patterns(urlpatterns)