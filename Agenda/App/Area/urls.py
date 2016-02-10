from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
from Agenda.App.Area.views import *

urlpatterns = patterns('',
                       url(r'^formulario_area/', 'Agenda.App.Area.views.Formulario_area'),
                       url(r'^consulta_area/', 'Agenda.App.Area.views.Consulta_area'),
                       # url(r'^editar-zonas/(?P<pk>\d+)/$', 'xv.app.presentaciones.views.editar_zonas'),
                       # url(r'^eliminar-zonas/(?P<pk>\d+)/$', 'xv.app.presentaciones.views.eliminar_zonas'),
                       )
