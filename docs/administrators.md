Updates to the software
-------

To log into the server, use SSH with your username and password.

```sh
foo@bar:~$ ssh username@singlepayercost.org
```

Once inside the server, the project's root directory can be found at /home/singlepayer

```sh
foo@bar:~$ cd /home/singlepayer
foo@bar:/home/single-payer$ ls
docs  fabfile.py  index.py  model  README.md  static  templates
```

To update the codebase from GitHub, stash and pull.

```sh
foo@bar:/home/single-payer$ git stash
Saved working directory and index state WIP on master: 2da16ea allows production style
HEAD is now at 2da16ea allows production style
Updating 2da16ea..6775549
Fast-forward
foo@bar:/home/single-payer$ git pull
 fabfile.py                    |  17 +++++++++++------
 index.py                      |  70 ++++++++++++++++++++++++++++++++++++++++++++++------------------------
 index.pyc                     | Bin 0 -> 5838 bytes
 static/scripts/singlepayer.js |  28 +++++++---------------------
 4 files changed, 64 insertions(+), 51 deletions(-)
 create mode 100644 index.pyc
```




