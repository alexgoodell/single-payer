import bibtexparser
from fabric.api import run, sudo, local, settings
from fabric.api import roles, execute
import logging
import sys
import tabulate
from prompter import prompt, yesno
from termcolor import colored

def update():

	print colored('-' * 10, 'yellow')
	print colored("Adding to git", 'blue')
	print colored('-' * 10, 'yellow')

	local('git add .')
	local('git status')
	m = prompt("Commit message:", default='Autoupdate')

	local('git commit -m \'' + m + "\'")
	local('git push origin master')
	print colored('............................. Done','green')



## How to set up server
# - install python 3.6
# sudo add-apt-repository ppa:deadsnakes/ppa
# sudo apt-get update
# sudo apt-get install python3.6
# mkdir ~/Downloads/
# cd ~/Downloads && sudo python3.6 get-pip.py
# sudo pip install Flask requests Flask-RESTful
# cd ~/
# git clone git@github.com:alexgoodell/single-payer.git