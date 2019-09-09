from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.


def index(request):

    if request.user.is_authenticated:
        return render(request, 'okscripts/index.html')
    else:
        return redirect('/accounts/login/')


def specials(request):
    if request.user.is_authenticated:
        return render(request, 'okscripts/specials.html')
    else:
        return redirect('/accounts/login/')
