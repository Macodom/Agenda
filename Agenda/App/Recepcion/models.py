from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

from Agenda.App.Llamadas.models import Calls


class UserManager(BaseUserManager):
    def _create_user(self, username, email, password, is_staff, is_superuser, **extra_fields):
        email = self.normalize_email(email)
        if not email:
            raise ValueError('Email obligatorio')
        user = self.model(username=username, email=email, is_active=True, is_staff=is_staff, is_superuser=is_superuser,
                          **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, password=None, **extra_fields):
        return self.create_user(username, email, password, is_staff=False, is_superuser=False, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        return self._create_user(username, email, password, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    def get_full_name(self):
        pass

    username = models.CharField(unique=True, max_length=50)
    email = models.EmailField()
    name = models.CharField(max_length=50, blank=True, null=False)
    last_name = models.CharField(max_length=50, blank=True, null=False)
    password = models.CharField(max_length=20, blank=False, null=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    phone = models.ForeignKey(Calls)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def get_short_name(self):
        return self.name

    def __str__(self):
        return "%s" % self.name
