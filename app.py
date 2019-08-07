from flask import Flask, render_template
from flask_restful import Resource, Api, reqparse
import requests
from termcolor import colored

def getTolken():
	message_terminal("attempting to obtain token from MS servers")
	url = 'https://login.microsoftonline.com/singlepayercost.onmicrosoft.com/oauth2/v2.0/token'

	params = {'client_id':'a47c5bb1-d6c5-4b15-ad04-4965a6a52200',
		'scope':'https://graph.microsoft.com/.default',
		'client_secret':'Yid05ISF3R3vI1loFlLzTE6RLZTHUTT40cSpJcgLkso=',
		'grant_type':'client_credentials'}
	headers = {'Content-type':'application/x-www-form-urlencoded'}

	r = requests.get(url, data=params, headers=headers)
	access_token = r.json()['access_token']
	message_terminal("access token returned as ", access_token)

	return access_token

def startSession(bearerTolken):
	message_terminal("now attempting to start session with bearer token")

	sessionURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/createSession'

	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all'}

	body = '{"persistChanges": false}'
	sessionRequest = requests.post(sessionURL, headers=headers, data=body)
	response = sessionRequest.json()
	session_id = sessionRequest.json()['id']
	message_terminal("response was: ", response)
	message_terminal("with a session ID of: ", session_id)
	return session_id

def subData(bearerTolken, sessionID):
	message_terminal("now gathering user input data")
	parser = reqparse.RequestParser()
	#add to body? add to body
	parser.add_argument('income')
	parser.add_argument('fam_size')
	parser.add_argument('premiums')
	parser.add_argument('oop')
	parser.add_argument('bill')
	args = parser.parse_args()
	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all',
		'workbook-session-id': sessionID,
		}
	body = '{"values": [['+str(args['income'])+'], ['+str(args['fam_size'])+'], ['+str(args['premiums'])+'], ['+str(args['oop'])+'], [\''+str(args['bill'])+'\']]}'
	
	message_terminal("now sending user input data to Graph API, with the following header and body: ", headers, body)

	subURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets(\'IO\')/range(address=\'C3:C7\')'
	subReq = requests.patch(subURL, headers=headers, data=body)

	if subReq.status_code == 200:
		print(colored("Success", "green"))
	else:
		error_message = "Error, code" + str(subReq.status_code)
		print(colored(error_message, "red"))


	return subReq.content, 200
	# submit info via PATCH to microsoftonline
def retCalcs(bearerTolken, sessionID):
	message_terminal("now retreiving the result data from Graph API")

	retURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets(\'IO\')/range(address=\'C10:C13\')'
	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all',
		'workbook-session-id': sessionID,
		}
	r = requests.get(retURL, headers=headers)

	if r.status_code == 200:
		print(colored("Success", "green"))
	else:
		error_message = "Error, code" + str(r.status_code)
		print(colored(error_message, "red"))

	return r.json()



app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
	def get(self):
		bearer = getTolken()
		return bearer, 200
	def post(self):
		bearer = getTolken()
		sessionID = startSession(bearer)
		subData(bearer, sessionID)
		return retCalcs(bearer, sessionID), 200


@app.route('/')
def home():
	return render_template('index.html')

@app.route('/questions3456')
def questions():
	return render_template('questions.html')

@app.route('/questions')
def questions():
	return render_template('questions.html')

def message_terminal(m, m2 = "", m3 = "", m4 = ""):
	message2 = str(m2) + str(m3) + str(m4)
	print(colored('-' * 20, 'yellow'))
	print(colored(m, 'blue'))
	print(colored(message2, 'white'))

api.add_resource(HelloWorld, '/api')

if __name__ == '__main__':
	app.run(host="0.0.0.0", port=80)








