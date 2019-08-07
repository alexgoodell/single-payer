     
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
 completeText: "Calculate"
 // isSinglePage: true     <- useful for debugging
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
// complete; will not show the calculate button until bearer/session ready

var bearerID = 0
var sessionID = 0
$(document).ready(function() {
  //$("input.btn.sv_complete_btn").prop("disabled",true);
  //bearerFun();
}());


// ----------------- core data functions --------------------

function finishSurvey() {

  income = survey.getValue('q_income')
  num_hh_mem = survey.getValue('q_num_hh_mem')
  premiums = survey.getValue('q_premiums')
  oop = survey.getValue('q_oop')
  bill = survey.getValue('q_bill')

  form = { fam_size: num_hh_mem, oop: oop, premiums: premiums, income: income, bill: bill };
  console.log(form)

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "/api",
    "method": "POST",
    "processData": true,
    "contentType": "application/x-www-form-urlencoded",
    "data": form
  }

  $.ajax(settings).done(function (response) {
    makeResults(response);
  });

}


function makeResults(response) {

  // gather inputs
  income = survey.getValue('q_income')
  num_hh_mem = survey.getValue('q_num_hh_mem')
  premiums = survey.getValue('q_premiums')
  oop = survey.getValue('q_oop')
  bill = survey.getValue('q_bill')

  // gather results


  currentSpend = response["text"][0][0].replace("$","").replace(",","")
  addedTaxes = response["text"][1][0].replace("$","").replace(",","")
  totalSinglePayerCost = response["text"][2][0].replace("$","").replace(",","")
  cost = response["text"][3][0].replace("$","").replace(",","")

  // console.log(currentSpend)
  // console.log(addedTaxes)
  // console.log(totalSinglePayerCost)
  // console.log(cost)

  currentSpend = parseInt(currentSpend,10)
  addedTaxes = parseInt(addedTaxes,10)
  totalSinglePayerCost = parseInt(totalSinglePayerCost,10)
  cost = parseInt(cost,10)

  // console.log(currentSpend)
  // console.log(addedTaxes)
  // console.log(totalSinglePayerCost)
  // console.log(cost)


  // determine wording for table
  saveOrSpendWording = ""
  if (cost < 0) {
    saveOrSpendWording = "Annual additional cost to you"
    costToUser = cost * -1.0
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
            <td> $ {0} </td>
          </tr>
          <tr>
            <td> Househould number </td>
            <td> {1} </td>
          </tr>
          <tr>
            <td> Current premiums </td>
            <td> $ {2} </td>
          </tr>
          <tr>
            <td> Current Out-of-pocket expenses </td>
            <td> $ {3} </td>
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
            <td> $ {5} </td>
          </tr>
          <tr>
            <td> Added taxes under single payer </td>
            <td> $ {6} </td>
          </tr>
          <tr>
            <td> Total single payer cost </td>
            <td> $ {7} </td>
          </tr>
          <tr>
            <td> {8} </td>
            <td> $ {9} </td>
          </tr>
        </td>
      </table>
    </div> <!-- survey result end -->
    <a href="questions3456"><input type="button" id="restart_button" value="Restart calculator"></a>
    <input type="button" id="print_button" value="Print your results" onClick="printDiv('surveyResult')">`

  income = numberWithCommas(income)
  num_hh_mem = numberWithCommas(num_hh_mem)
  premiums = numberWithCommas(premiums)
  oop = numberWithCommas(oop)
  bill = numberWithCommas(bill)
  currentSpend = numberWithCommas(currentSpend)
  addedTaxes = numberWithCommas(addedTaxes)
  totalSinglePayerCost = numberWithCommas(totalSinglePayerCost)
  saveOrSpendWording = saveOrSpendWording
  costToUser = numberWithCommas(costToUser)

  resultsText = resultsText.format(income, num_hh_mem,
    premiums, oop, bill, currentSpend, addedTaxes,
    totalSinglePayerCost, saveOrSpendWording, costToUser)

  document.getElementById("surveyResultHolder").innerHTML = resultsText

}   

// ----------------- misc functions --------------------


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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




