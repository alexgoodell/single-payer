Set up local installation
------

- First, will need to set up Python 3.6.4 with recent setuptools, pip, wheels, etc
- Upgrade PIP to most recent version (tested using pip-20.2.3)
- Clone the repository and cd into it

```console
foo@bar:~$ git clone https://github.com/alexgoodell/single-payer.git
foo@bar:~$ cd single-payer
```

If using a virtual environment, create a new virtual environment, and run the following. This will collect the python requirements.

```console
foo@bar:~/single-payer$ pip install -r requirements.txt
```

We have used a python command-line tool called Fabric, which allows for easy scripting. To use fabric, call the command ```fab``` followed by an argument. To make sure fabric is correctly installed, run the following.

```console
foo@bar:~/single-payer$ fab test_fabric
```

To start the python server on your local computer:

```console
foo@bar:~/single-payer$ fab start_local_server
```

You can then navigate to http://127.0.0.1 to see a live preview of the site.


Set up remote server
-----

To interact with the remote server, you must change the variables in fabfile.py to include your username, password, and host (IP address). Our remote server uses the built-in Flask server with a Supervisor task to make sure it is constantly running. 

```python
# ---------------------------------- Server Info -----------------------------------

env.user = ''      # eg, tom
env.password = ''  # eg, "bestpassw0rd"
env.hosts = ''     # eg, 100.12.12.100
```

Once these are correct, you can test your connection by running:

```console
foo@bar:~/single-payer$ fab test_connection
```

To restart the remote server after changes to the GitHub code base, run the following, which removes the old codebase and replaces it with the most current code on the GitHub repo:

```console
foo@bar:~/single-payer$ fab refresh_server
```

If you desire to start a new server instance, start a new AWS instance with Ubuntu "Trusty" 14.04, and configure Fabric to connect to that server. All dependencies and file structure can be installed with the following command:

```console
foo@bar:~/single-payer$ fab set_up_server
```

