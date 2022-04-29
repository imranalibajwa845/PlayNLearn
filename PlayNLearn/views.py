import subprocess
import pygame

from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from .forms import SignUpForm, EditProfileForm


@login_required
def home(request):
    return render(request, 'PlayNLearn/home.html')


def signUp(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  # load the profile instance created by the signal
            user.profile.email = form.cleaned_data.get('email')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'PlayNLearn/signUp.html', {'form': form})


def landingPage(request):
    return render(request,'PlayNLearn/landing.html')


def editProfile(request):
    if request.method == 'POST':
        form = EditProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = EditProfileForm(instance=request.user)
        return render(request, 'PlayNLearn/profile_edit.html', {'form': form})
