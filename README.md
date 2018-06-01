# Single-payer cost calculator

The purpose of this software is to allow for a web-enabled, open-source, open-access, excel-based model that predicts the economic effects of a state-wide or nation-wide switch to a single-payer health plan to individual households in the US. 

There are three core components of this software: 
- a web interface with a set of questions to gather required data (healthcare spending, income, etc) from a user
- an Excel model which can estimate the impact of single-payer plan on a household
- a [SpreadServe](http://spreadserve.com/) server which accepts user inputs, completes the calculations in Excel, and returns the estimates to a user.

## Web interface

All of the web interface is included in this repository, under the /public_html directory. The system utilizes [SurveyJS](http://surveyjs.io) to manage the series of questions. 

## Excel model

The excel-based model uses a series of lookup tables to estimate changes in tax burden and healthcare spending. It estimates these changes by assessing the impact of the California State single-payer bill (SB 562) on households. The model is available in this repository in the /model directory. 



Contributers (alphabetical)
---------------------------
- Dr. Hank Abrons, MD, past president, California Chapter, Physicians for a National Health Plan
- Dr. Alex Goodell, Resident Physician, Stanford University
- Benjamin Herzel, Medical Student, Loma Linda University Physicians for a National Health Plan
- Dr. James G Kahn, Professor at University of San Francisco California and past president, California Chapter, Physicians for a National Health Plan 
- Andrew McGuire, Executive Director, California OneCare
- Todd Lash, Managing Director, Tenaya Partners

Funding
-------
The project has not recieved any insitutional funding.