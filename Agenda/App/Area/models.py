from django.db import models


class Area(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return "%s" % self.name
