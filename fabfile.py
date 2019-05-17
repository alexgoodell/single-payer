from fabric.api import run, sudo, local, settings
from fabric.api import roles, execute
import logging
import sys
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



## How to install server prerequisites
# - install python 3.6
# sudo add-apt-repository ppa:deadsnakes/ppa
# sudo apt-get update
# sudo apt-get install python3.6
# mkdir ~/Downloads/
# cd ~/Downloads
# curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
# sudo python3.6 get-pip.py
# sudo pip install Flask requests Flask-RESTful
# cd /home
# sudo git clone https://github.com/alexgoodell/single-payer.git

## booting up server

# cd /home/single-payer
# sudo python3.6 index.py