from flask import Flask, render_template
from flask_restful import Resource, Api, reqparse
import requests

def getTolken():
	url = 'https://login.microsoftonline.com/singlepayercost.onmicrosoft.com/oauth2/v2.0/token'

	params = {'client_id':'a47c5bb1-d6c5-4b15-ad04-4965a6a52200',
		'scope':'https://graph.microsoft.com/.default',
		'client_secret':'Yid05ISF3R3vI1loFlLzTE6RLZTHUTT40cSpJcgLkso=',
		'grant_type':'client_credentials'}
	headers = {'Content-type':'application/x-www-form-urlencoded'}

	r = requests.get(url, data=params, headers=headers)
	return r.json()['access_token']

def startSession(bearerTolken):

	sessionURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/createSession'

	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all'}

	body = '{"persistChanges": false}'
	sessionRequest = requests.post(sessionURL, headers=headers, data=body)
	print('token success')
	return sessionRequest.json()['id']

def subData(bearerTolken, sessionID):
	subURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets(\'IO\')/range(address=\'C3:C7\')'
	parser = reqparse.RequestParser()
	#add to body? add to body
	parser.add_argument('income', type=int)
	parser.add_argument('fam_size', type=int)
	parser.add_argument('premiums', type=int)
	parser.add_argument('oop', type=int)
	parser.add_argument('bill')
	args = parser.parse_args()
	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all',
		'workbook-session-id': sessionID,
		}
	# body built from POST headers and translated to json body for request
	# consider passing the body from the original clientside request
	body = '{"values": [['+str(args['income'])+'], ['+str(args['fam_size'])+'], ['+str(args['premiums'])+'], ['+str(args['oop'])+'], [\''+str(args['bill'])+'\']]}'
	subReq = requests.patch(subURL, headers=headers, data=body)
	return subReq.content, 200
	# submit info via PATCH to microsoftonline
def retCalcs(bearerTolken, sessionID):
	retURL = 'https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets(\'IO\')/range(address=\'C10:C13\')'
	headers = {'Authorization':'Bearer '+bearerTolken,
		'Content-Type':'application/json',
		'scope':'Files.ReadWrite.all',
		'workbook-session-id': sessionID,
		}
	r = requests.get(retURL, headers=headers)
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

@app.route('/questions')
def questions():
	return render_template('questions.html')

api.add_resource(HelloWorld, '/api')



if __name__ == '__main__':
	app.run(host="127.0.0.1", port=80)
#inputRequest























