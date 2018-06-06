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


