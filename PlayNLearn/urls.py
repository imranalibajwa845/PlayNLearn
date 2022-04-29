from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import password_reset, password_reset_done, password_reset_confirm
from PlayNLearn import views

urlpatterns = [
    url(r'^$',views.landingPage ,name="landingPage"),
    url(r'^home', views.home, name='home'),
    url(r'^login/$', auth_views.login, {'template_name': 'PlayNLearn/login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '../login'}, name='logout'),
    url(r'^signup/$', views.signUp, name='signUp'),
    url(r'^profile_edit/$', views.editProfile, name='profile_edit'),
    url(r'^reset-password/$',password_reset, name='password_reset'),
    url(r'^reset-password/done/$', password_reset_done, name='password_reset_done'),
    url(r'^reset-password/confirm/$', password_reset_confirm, name='password_reset_confirm')
]