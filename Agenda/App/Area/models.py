from django.db import models


class Area(models.Model):
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return "%s" % (self.name)
