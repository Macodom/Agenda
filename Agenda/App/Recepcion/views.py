from django.shortcuts import render_to_response
from django.template import RequestContext
from django.shortcuts import render
from .models import Reception

def login(request):
    return render_to_response('index_recepcion.html', context_instance=RequestContext(request))

# def index(request):
#     return render_to_response('index.html', context_instance=RequestContext(request))
