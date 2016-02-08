from django.db import models
from Agenda.App.Area.models import Area

class Adviser(models.Model):
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    extension = models.CharField(max_length=12, blank=True)
    area = models.ForeignKey(Area)

    def __str__(self):
        return "%s" % self.name
