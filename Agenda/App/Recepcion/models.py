from django.db import models
from Agenda.App.Llamadas.models import Calls

class Reception(models.Model):
    name = models.CharField(max_length=50, unique=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=20, blank=False, null=True)
    phone = models.ForeignKey(Calls)

    def __str__(self):
        return "%s" % self.name
