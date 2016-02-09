from Agenda.App.Recepcion.views import *
from django.conf.urls import patterns, url

urlpatterns = patterns('',
                       url(r'^$', 'Agenda.App.Recepcion.views.login'),
                       )
