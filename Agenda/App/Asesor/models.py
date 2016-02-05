from django.db import models


class Adviser(models.Model):
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    extension = models.CharField(max_length=12, blank=True)

    def __unicode__(self):
        return "%s" % (self.nombre)
