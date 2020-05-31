from django.shortcuts import render
from django.http import HttpResponse
from .models import newSchedule
from django.shortcuts import redirect

from django.http import Http404, JsonResponse

#доданий код
#from rest_framework import serializer
#from rest_framework.decorators import api_views
#from rest_framework.response import Response
#доданий код

def home(request):
    classschedule = newSchedule.objects.all()
    return render(request, 'index.html')
# Create your views here.
def classsched_subjects(request, pk):
    classschedule = newSchedule.objects.get(pk=pk)
    return render(request, 'indexCreate.html')

#def add_ajax(request):
#    if request.is_ajax():
#        response = {'first-text': 'Lorem Ipsum is simply dummy text', 'second-text': 'to make a type specimen book. It has '}
#
#        return JsonResponse(response)
#    else:
#        raise Http404
