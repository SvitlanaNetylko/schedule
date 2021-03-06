"""schedule URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

#urlpatterns = [
#    path('admin/', admin.site.urls),
#]
from django.conf.urls import url

from classschedule import views
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^$', views.home, name='home'),
    #url(r'^classschedule/', views.classsched_subjects, name='classsched_subjects'),
    url(r'^admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='../reactapp/public/index.html')),
    #url(r'^ajax/$', views.add_ajax),
    url(r'^new/schedule/$', views.scheduleCreate.as_view(), name='scheduleCreate'),
]
