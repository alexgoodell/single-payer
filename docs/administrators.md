Updates to the software
-------

To log into the server, use SSH with your username and password.

```console
foo@bar:~$ ssh username@singlepayercost.org
```

Once inside the server, the project's root directory can be found at /home/singlepayer

```console
foo@bar:~$ cd /home/singlepayer

foo@bar:/home/single-payer$ ls
docs  fabfile.py  index.py  model  README.md  static  templates
```

To update the codebase from GitHub, stash and pull.

```console
foo@bar:/home/single-payer$ git stash
Saved working directory and index state WIP on master: 2da16ea allows production style
HEAD is now at 2da16ea allows production style
Updating 2da16ea..6775549
Fast-forward

foo@bar:/home/single-payer$ git pull
 fabfile.py                    |  17 +++++++++++------
 index.py                      |  70 +++++++++++++++++++++++++++++++
 index.pyc                     | Bin 0 -> 5838 bytes
 static/scripts/singlepayer.js |  28 +++++++---------------------
 4 files changed, 64 insertions(+), 51 deletions(-)
 create mode 100644 index.pyc
```


Installing software
------

From a fresh Ubuntu 14.0, follow these commands to create and run server:


### Install python 

```console
foo@bar:~$ sudo add-apt-repository ppa:deadsnakes/ppa
foo@bar:~$ sudo apt-get update
foo@bar:~$ sudo apt-get install python3.6
```

### Download pip 

```console
foo@bar:~$ mkdir ~/Downloads/
foo@bar:~$ cd ~/Downloads
foo@bar:~/Downloads$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
```

### Install pip and flask

```console
foo@bar:~/Downloads$ sudo python3.6 get-pip.py
foo@bar:~/Downloads$ sudo pip install Flask requests Flask-RESTful
```

### Cloning repo

```console
foo@bar:~/Downloads$ cd /home
foo@bar:/home$ sudo git clone https://github.com/alexgoodell/single-payer.git
```

### Start server

```console
foo@bar:~/home$ cd /home/single-payer
foo@bar:/home/single-payer$ sudo python3.6 index.py
```



