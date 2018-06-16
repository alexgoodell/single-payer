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

## Spreadserve server

[SpreadServe](http://spreadserve.com/) is a tool that allows users to execute excel calculations on a remote computer without an installation (or active instance) of Microsoft Excel, and allows access to those calculations through a python API. It uses [Tornado](http://www.tornadoweb.org/) to serve data.

The SpreadServe server (platform: Windows Server) is stored as a public Amazon Machine Image (AMI): **link pending**. The default administrator password is ```health economics```. The program requires at least 2GB of RAM, and runs well on a t2.small EC2 instance with few users. A custom python script defines an API to interact with the SpreadServe service, located at /spreadserve_server/api.py. This file is pre-installed on the AMI.


<!-- Contributers (alphabetical)
- Dr. Hank Abrons, MD, past president, California Chapter, Physicians for a National Health Plan
- Dr. Alex Goodell, Resident Physician, Stanford University
- Benjamin Herzel, Medical Student, Loma Linda University Physicians for a National Health Plan
- Dr. James G Kahn, Professor at University of San Francisco California and past president, California Chapter, Physicians for a National Health Plan 
- Andrew McGuire, Executive Director, California OneCare
- Todd Lash, Managing Director, Tenaya Partners
 -->

Funding
-------
The project has not received any institutional funding.


create session
https://graph.microsoft.com/v1.0/me/drive/items/EE678B404BA8B3E3!133/workbook/createSession


id:


cluster=US1&session=12.e0fc340e7a3a1.A81.1.V25.82966fGyvCX3HXSvXSvaBmMAQ14.5.en-US5.en-US24.ee678b404ba8b3e3-Private1.A1.N16.16.0.10304.3505014.5.en-US5.en-US1.V1.N0.1.A

then use as header: 
workbook-session-id: {session-id} header.


https://graph.microsoft.com/v1.0/me/drive/items/EE678B404BA8B3E3!133/workbook/worksheets('Calculator')/Range(address='Calculator!I27')



PATCH
https://graph.microsoft.com/v1.0/me/drive/items/EE678B404BA8B3E3!133/workbook/worksheets('Calculator')/range(address='A5')
{
"values" : 5000
}