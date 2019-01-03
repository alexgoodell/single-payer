     
// ----------------- set up survey.js tool --------------------

Survey
    .StylesManager
    .applyTheme("bootstrap");

var json = {
 title: "Single payer",
 completedHtml: " ",
 loadingHtml: "Loading....",
 pages: [
  {
   name: "p_bill",
   elements: [
    {
     type: "radiogroup",
     name: "q_bill",
     title: "Select single-payer bill:",
     description: "Choose a proposed single-payer healthcare bill that will be used for our model.",
     isRequired: true,
     defaultValue: "HR 676",
     choices: [
      {
       value: "SB 562",
       text: "SB 562 "
      },
      {
       value: "HR 676",
       text: "HR 676"
      }
     ]
    }
   ]
  },
  {
   name: "p_premiums",
   elements: [
    {
     type: "dropdown",
     name: "q_premiums",
     title: "How much did your household spend last year on health insurance premiums? ",
     defaultValue: 250,
     description: "For example, if insured from work report your premium contributions, or if from the ACA exchange report the portion not covered by an ACA subsidy. Please report the total for all insurance.",
     isRequired: true,
     requiredErrorText: "Please select a value.",
     choices: [
      {
       value: 250,
       text: "$0 - $500"
      },
      {
       value: 750.5,
       text: "$501 - $1,000"
      },
      {
       value: 1250.5,
       text: "$1,001 - $1,500"
      },
      {
       value: 1750.5,
       text: "$1,501 - $2,000"
      },
      {
       value: 2250.5,
       text: "$2,001 - $2,500"
      },
      {
       value: 2750.5,
       text: "$2,501 - $3,000"
      },
      {
       value: 3250.5,
       text: "$3,001 - $3,500"
      },
      {
       value: 3750.5,
       text: "$3,501 - $4,000"
      },
      {
       value: 4250.5,
       text: "$4,001 - $4,500"
      },
      {
       value: 4750.5,
       text: "$4,501 - $5,000"
      },
      {
       value: 5250.5,
       text: "$5,001 - $5,500"
      },
      {
       value: 5750.5,
       text: "$5,501 - $6,000"
      },
      {
       value: 6250.5,
       text: "$6,001 - $6,500"
      },
      {
       value: 6750.5,
       text: "$6,501 - $7,000"
      },
      {
       value: 7250.5,
       text: "$7,001 - $7,500"
      },
      {
       value: 7750.5,
       text: "$7,501 - $8,000"
      },
      {
       value: 8250.5,
       text: "$8,001 - $8,500"
      },
      {
       value: 8750.5,
       text: "$8,501 - $9,000"
      },
      {
       value: 9250.5,
       text: "$9,001 - $9,500"
      },
      {
       value: 9750.5,
       text: "$9,501 - $10,000"
      },
      {
       value: 10250.5,
       text: "$10,001 - $10,500"
      },
      {
       value: 10750.5,
       text: "$10,501 - $11,000"
      },
      {
       value: 11250.5,
       text: "$11,001 - $11,500"
      },
      {
       value: 11750.5,
       text: "$11,501 - $12,000"
      },
      {
       value: 12250.5,
       text: "$12,001 - $12,500"
      },
      {
       value: 12750.5,
       text: "$12,501 - $13,000"
      },
      {
       value: 13250.5,
       text: "$13,001 - $13,500"
      },
      {
       value: 13750.5,
       text: "$13,501 - $14,000"
      },
      {
       value: 14250.5,
       text: "$14,001 - $14,500"
      },
      {
       value: 14750.5,
       text: "$14,501 - $15,000"
      },
      {
       value: 15250.5,
       text: "$15,001 - $15,500"
      },
      {
       value: 15750.5,
       text: "$15,501 - $16,000"
      },
      {
       value: 16250.5,
       text: "$16,001 - $16,500"
      },
      {
       value: 16750.5,
       text: "$16,501 - $17,000"
      },
      {
       value: 17250.5,
       text: "$17,001 - $17,500"
      },
      {
       value: 17750.5,
       text: "$17,501 - $18,000"
      },
      {
       value: 18250.5,
       text: "$18,001 - $18,500"
      },
      {
       value: 18750.5,
       text: "$18,501 - $19,000"
      },
      {
       value: 19250.5,
       text: "$19,001 - $19,500"
      },
      {
       value: 19750.5,
       text: "$19,501 - $20,000"
      }
     ]
    },
    {
     type: "html",
     name: "question1"
    }
   ]
  },
  {
   name: "p_oop",
   elements: [
    {
     type: "dropdown",
     name: "q_oop",
     title: "What were your out-of-pocket expenditures, for deductibles, copayments, and uncovered services? ",
     defaultValue: 250,
     description: "Please think about primary care and specialist office visits, hospitalization / surgery, counseling / therapy, maternity / infertility treatments, chiropractor / acupuncture, and all prescription and over-the-counter medicines.",
     isRequired: true,
     requiredErrorText: "Please select a value.",
     choices: [
            {
       value: 250,
       text: "$0 - $500"
      },
      {
       value: 750.5,
       text: "$501 - $1,000"
      },
      {
       value: 1250.5,
       text: "$1,001 - $1,500"
      },
      {
       value: 1750.5,
       text: "$1,501 - $2,000"
      },
      {
       value: 2250.5,
       text: "$2,001 - $2,500"
      },
      {
       value: 2750.5,
       text: "$2,501 - $3,000"
      },
      {
       value: 3250.5,
       text: "$3,001 - $3,500"
      },
      {
       value: 3750.5,
       text: "$3,501 - $4,000"
      },
      {
       value: 4250.5,
       text: "$4,001 - $4,500"
      },
      {
       value: 4750.5,
       text: "$4,501 - $5,000"
      },
      {
       value: 5250.5,
       text: "$5,001 - $5,500"
      },
      {
       value: 5750.5,
       text: "$5,501 - $6,000"
      },
      {
       value: 6250.5,
       text: "$6,001 - $6,500"
      },
      {
       value: 6750.5,
       text: "$6,501 - $7,000"
      },
      {
       value: 7250.5,
       text: "$7,001 - $7,500"
      },
      {
       value: 7750.5,
       text: "$7,501 - $8,000"
      },
      {
       value: 8250.5,
       text: "$8,001 - $8,500"
      },
      {
       value: 8750.5,
       text: "$8,501 - $9,000"
      },
      {
       value: 9250.5,
       text: "$9,001 - $9,500"
      },
      {
       value: 9750.5,
       text: "$9,501 - $10,000"
      },
      {
       value: 10250.5,
       text: "$10,001 - $10,500"
      },
      {
       value: 10750.5,
       text: "$10,501 - $11,000"
      },
      {
       value: 11250.5,
       text: "$11,001 - $11,500"
      },
      {
       value: 11750.5,
       text: "$11,501 - $12,000"
      },
      {
       value: 12250.5,
       text: "$12,001 - $12,500"
      },
      {
       value: 12750.5,
       text: "$12,501 - $13,000"
      },
      {
       value: 13250.5,
       text: "$13,001 - $13,500"
      },
      {
       value: 13750.5,
       text: "$13,501 - $14,000"
      },
      {
       value: 14250.5,
       text: "$14,001 - $14,500"
      },
      {
       value: 14750.5,
       text: "$14,501 - $15,000"
      },
      {
       value: 15250.5,
       text: "$15,001 - $15,500"
      },
      {
       value: 15750.5,
       text: "$15,501 - $16,000"
      },
      {
       value: 16250.5,
       text: "$16,001 - $16,500"
      },
      {
       value: 16750.5,
       text: "$16,501 - $17,000"
      },
      {
       value: 17250.5,
       text: "$17,001 - $17,500"
      },
      {
       value: 17750.5,
       text: "$17,501 - $18,000"
      },
      {
       value: 18250.5,
       text: "$18,001 - $18,500"
      },
      {
       value: 18750.5,
       text: "$18,501 - $19,000"
      },
      {
       value: 19250.5,
       text: "$19,001 - $19,500"
      },
      {
       value: 19750.5,
       text: "$19,501 - $20,000"
      }
     ]
    }
   ]
  },
  {
   name: "p_num_hh_mem",
   elements: [
    {
     type: "dropdown",
     name: "q_num_hh_mem",
     title: "How many people are in your household?",
     defaultValue: "1",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "1"
      },
      {
       value: "2",
       text: "2"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "4"
      },
      {
       value: "5",
       text: "5"
      },
      {
       value: "6",
       text: "6"
      },
      {
       value: "7",
       text: "7"
      },
      {
       value: "8",
       text: "8"
      },
      {
       value: "9",
       text: "9"
      },
      {
       value: "10",
       text: "10+"
      }
     ]
    }
   ]
  },
  {
   name: "p_income",
   elements: [
    {
     type: "dropdown",
     name: "q_income",
     title: "In order to estimate your costs under single payer, we need to know your approximate household income.",
     defaultValue: 25000,
     isRequired: true,
     requiredErrorText: "Please select a value.",
     choices: [
      {
       value: 25000,
       text: "$25,000 or less"
      },
      {
       value: 37500,
       text: "$25,001 - $50,000"
      },
      {
       value: 62500,
       text: "$ 50,001 - $75,000"
      },
      {
       value: 87500,
       text: "$75,001 - $100,000"
      },
      {
       value: 125000,
       text: "$100,001 - $150,000"
      },
      {
       value: 175000,
       text: "$150,001 - $200,000"
      },
      {
       value: 200000,
       text: "$200,001 - $300,000"
      },
      {
       value: 400000,
       text: "$300,001 - $500,000"
      },
      {
       value: 750000,
       text: "$500,001 - $1,000,000"
      },
      {
       value: 2000000,
       text: "More than $1,000,000"
      }
     ],
     otherText: "Or enter directly:"
    }
   ]
  },
  {
   name: "p_email",
   elements: [
    {
     type: "text",
     name: "q_email",
     title: "If you’d like us to contact you about single payer, please provide your email address.",
     defaultValue: "email@email.com",
     validators: [
      {
       type: "email"
      }
     ]
    }
   ]
  }
 ],
 showTitle: false,
 showQuestionNumbers: "off",
 showProgressBar: "bottom",
 startSurveyText: "Start",
 pagePrevText: "<",
 pageNextText: ">",
 completeText: "Calculate",
 isSinglePage: true
}

// ----------------- intialize survey --------------------

// start survey tool
window.survey = new Survey.Model(json);
survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";
        classes.progress = "sq-progress";
        classes.progressBar = "sq-progress-bar";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root = "sq-root sq-root-cb";
        }
    });

$("#surveyElement").Survey({model: survey, onComplete:finishSurvey});

// ----------------- intialize bearer request --------------------


// start bearer function and session request as user completes survey
// potential problem: user finishes survey before bearer/session response 
// complete; will initialize bearer and session id's as zero, and will check 
// that bearer/session complete before we starting results fetching

var bearerID = 0
var sessionID = 0
$(document).ready(bearerFun()) 


// ----------------- core data functions --------------------

function finishSurvey() {
  if (sessionID != 0 && bearerID != 0) {
    inputFun(sessionID,bearerID,survey);
  } else {
    alert("wait")
  }
}

function bearerFun() {
  // recieve a bearer token from the server
    var bearerRequest = new XMLHttpRequest();
    var tolkenUrl = 'https://login.microsoftonline.com/singlepayercost.onmicrosoft.com/oauth2/v2.0/token';
    var params = 'client_id=a47c5bb1-d6c5-4b15-ad04-4965a6a52200&scope=https://graph.microsoft.com/.default&client_secret=Yid05ISF3R3vI1loFlLzTE6RLZTHUTT40cSpJcgLkso=&grant_type=client_credentials';
    bearerRequest.open('POST', tolkenUrl, true);
    bearerRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    bearerRequest.setRequestHeader('Access-Control-Allow_Origin', '*');
    var parsedResponse;
    bearerRequest.onreadystatechange = function(){
      if (bearerRequest.readyState == 4 && bearerRequest.status == 200) {
        parsedResponse = JSON.parse(bearerRequest.responseText);
        bearerID = parsedResponse["access_token"]
        console.log('beearer ID success');
        sessionFun(bearerID);
      }
      console.log(bearerID);
    }
    bearerRequest.send(params);
}

function sessionFun(bearerID) {
    // create a session, record session id
    var sessionRequest = new XMLHttpRequest(); 
    var responseURL = "https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/createSession";
    sessionRequest.open('POST', responseURL, true);
    console.log(bearerID);
    sessionRequest.setRequestHeader('Authorization', 'Bearer '+ bearerID);
    sessionRequest.setRequestHeader('Content-Type', 'application/json');
    sessionRequest.setRequestHeader('scope', 'Files.ReadWrite.All');
    var persist = '{"persistChanges": false}';
    sessionRequest.onreadystatechange = function() {
      console.log('session entered...');
      console.log('readystate:'+sessionRequest.readyState);
      console.log('status'+sessionRequest.status);

      if (sessionRequest.readyState == 4 && sessionRequest.status == 201) {
        parsedResponse = JSON.parse(sessionRequest.responseText);
        sessionID = parsedResponse["id"];
        console.log('session created');
      }
    }
    sessionRequest.send(persist); 
}

function inputFun(sessionID,bearerID,survey) {
    // update input values on session instance 
    var inputRequest = new XMLHttpRequest(); 
    var inputURL = "https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets('IO')/range(address='C3:C7')";
    var data = '{"values": [['+survey.getValue('q_income')+'], ['+survey.getValue('q_num_hh_mem')+'], ['+survey.getValue('q_premiums')+'], ['+survey.getValue('q_oop')+'], [\''+survey.getValue('q_bill')+'\']]}';
    console.log(data);
    inputRequest.open('PATCH', inputURL, false);
    inputRequest.setRequestHeader('Authorization', 'Bearer '+bearerID);
    inputRequest.setRequestHeader('Content-Type', 'application/json');
    inputRequest.setRequestHeader('scope', 'Files.ReadWrite.All');
    inputRequest.setRequestHeader('workbook-session-id', sessionID);
    inputRequest.onreadystatechange = function() {
      if (inputRequest.readyState == 4 && inputRequest.status == 200) {
        console.log('input completed');
        receptFun(sessionID,bearerID,survey);
      }
    }
    inputRequest.send(data);
}

function receptFun(sessionID,bearerID,survey) {
    // recieve results
    var dataResponse = new XMLHttpRequest(); 
    var dataURL = "https://graph.microsoft.com/v1.0/users/a01ab9eb-36de-4ebc-9889-3eb61d16d0e8/drives/b!8BpoJu__qEGSPkgzdPS-tpKUfASPeq9KuGIiQ7kUjgFvDlgFQHDHTYFuK27A0xlp/items/01X34IAM7MSEX2BK2PTJELELKUX4QPSWXA/workbook/worksheets('IO')/range(address='C10:C13')";
    dataResponse.open('GET', dataURL, true);
    dataResponse.setRequestHeader('Authorization', 'Bearer ' + bearerID);
    dataResponse.setRequestHeader('Content-Type', 'application/json');
    dataResponse.setRequestHeader('scope', 'Files.ReadWrite.All');
    dataResponse.setRequestHeader('workbook-session-id', sessionID);
    dataResponse.onreadystatechange = function() {
      if (dataResponse.readyState == 4 && dataResponse.status == 200) {
        

        // gather inputs
        income = survey.getValue('q_income')
        num_hh_mem = survey.getValue('q_num_hh_mem')
        premiums = survey.getValue('q_premiums')
        oop = survey.getValue('q_oop')
        bill = survey.getValue('q_bill')

        // gather results
        parsedResponse = JSON.parse(dataResponse.responseText); 
        currentSpend = parsedResponse["text"][0]
        addedTaxes = parsedResponse["text"][1]
        totalSinglePayerCost = parsedResponse["text"][2]
        cost = parsedResponse["text"][3];

        // determine wording for table
        saveOrSpendWording = ""
        if (cost[0][0] == "-") {
          saveOrSpendWording = "Annual additional cost to you"
          costToUser = cost[0].slice(1)
        }
        else {
          saveOrSpendWording = "Annual savings to you"
          costToUser = cost
        }

        // template for table
        resultsText = `

          <div id="surveyResult">
            <h5 data-bind="css: koCss().title" class="sq-title"> Your inputs </h5>
            <table>
              <td>
                <tr>
                  <td> Income </td>
                  <td> {0} </td>
                </tr>
                <tr>
                  <td> Househould number </td>
                  <td> {1} </td>
                </tr>
                <tr>
                  <td> Current premiums </td>
                  <td> {2} </td>
                </tr>
                <tr>
                  <td> Current Out-of-pocket expenses </td>
                  <td> {3} </td>
                </tr>
                <tr>
                  <td> Selected single-payer bill</td>
                  <td> {4} </td>
                </tr>
              </td>
            </table>
            <h5 data-bind="css: koCss().title" class="sq-title"> Your results </h5>
            <table>
              <td>
                <tr>
                  <td> You currently spend </td>
                  <td> {5} </td>
                </tr>
                <tr>
                  <td> Added taxes under single payer </td>
                  <td> {6} </td>
                </tr>
                <tr>
                  <td> Total single payer cost </td>
                  <td> {7} </td>
                </tr>
                <tr>
                  <td> {8} </td>
                  <td> {9} </td>
                </tr>
              </td>
            </table>
          </div> <!-- survey result end -->
          <input type="button" id="print_button" value="Print your results" onClick="printDiv('surveyResult')">`


        resultsText = resultsText.format(income, num_hh_mem,
          premiums, oop, bill, currentSpend, addedTaxes,
          totalSinglePayerCost, saveOrSpendWording, costToUser)
        
        document.getElementById("surveyResultHolder").innerHTML = resultsText
      }
    }
    dataResponse.send(null);
}   

// ----------------- misc functions --------------------


// for easier formatting of results
String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}

// for printing
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}




