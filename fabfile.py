


# ---------------------------------- Import -----------------------------------

import time
from getpass import getpass
import fabric as fabric
from fabric.api import *
from termcolor import colored
from fabric.operations import local as lrun, run

env.user = 'ubuntu'
env.key_filename = '~/.ssh/Alex.pem'
env.use_ssh_config = True
env.hosts = 'single-payer-server'


# ------------------------------- Set up server -------------------------------

def set_up_server():

	print(colored("\n =========== Install dependencies ===========","yellow"))

	run('sudo apt-get -y update')
	run('sudo apt-get -y install git fish vim')

	print(colored("\n =========== Install python ===========","yellow"))

	run('sudo add-apt-repository -y ppa:deadsnakes/ppa')
	run('sudo apt-get -y update')
	run('sudo apt-get -y install python3.6')

	print(colored("\n =========== Download pip ===========","yellow"))

	run('mkdir -p ~/Downloads/')
	with cd('~/Downloads'):
		run('curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py')

	print(colored('\n ======= Install supervisord =======','yellow'))
	run("sudo apt-get -y install supervisor")

	print(colored('\n ======= Install pip and flask =======','yellow'))

	with cd('~/Downloads'):
		run('sudo python3.6 get-pip.py')
	run('sudo pip install Flask requests Flask-RESTful termcolor')
	
	print(colored('\n ======= Change permissions prior to pull =======','yellow'))

	run('sudo chmod -R 777 /home/single-payer')

	print(colored('\n ======= Cloning repo =======','yellow'))

	with cd("/home"):
		with warn_only():
			run('rm -rf single-payer')
		run('sudo git clone https://github.com/alexgoodell/single-payer.git')

	print(colored('\n ======= Change permissions after pull =======','yellow'))

	run('sudo chmod -R 777 /home/single-payer')

	print(colored('\n ======= Configure supervisord =======','yellow'))

	with warn_only():
		run("sudo service supervisor stop")
		run('sudo rm -rf /etc/supervisor/conf.d/*.conf')
		run('sudo rm -rf /var/log/sp.err.log')
		run('sudo rm -rf /var/log/sp.out.log')
		run('sudo touch /var/log/sp.err.log')
		run('sudo touch /var/log/sp.out.log')
	put('supervisor/single-payer.conf', '/etc/supervisor/conf.d', use_sudo=True)

	print(colored('\n ======= Start test server / supervisord =======','yellow'))

	with warn_only():
		run("sudo service supervisor start")
		run('sudo supervisorctl reread')
		run('sudo supervisorctl update')
		status = run('sudo supervisorctl status')

	if "RUNNING" in status:
		print(colored('\n ----> Server launched at IP {}'.format(env.host),'green'))
	else:
		print(colored('\n ----> !! Error !! Server failed to launch','red'))

	print(colored('\n ----> !! Warning !! Currently using DEVELOPMENT version of flask server','yellow'))


# ------------------------------ Local dependencies mangement -------------------------------


def update_requirements_file():
    ''' Builds requirements file using pipreq package '''
    local("pipreqs --print $PWD")
    local("pipreqs --force $PWD")

def install_requirements():
    ''' Installs requirements with pip. Note, this function probably won't be used through 
    fabric, as it won't run without required dependencies installed'''
    locat("pip install -r requirements.txt")







