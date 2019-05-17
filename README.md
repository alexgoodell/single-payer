Single-payer cost calculator
----------

The purpose of this software is to allow for a web-enabled, open-source, open-access, excel-based model that predicts the economic effects of a state-wide or nation-wide switch to a single-payer health plan to individual households in the US. 

There are two core components of this software: 
- an Excel model which can estimate the impact of single-payer plan on a household; this has been uploaded to microsoft onedrive to allow for web-based interaction through Microsoft Graph API
- an web interface that allows users to fill out information about their healthcare spending to calculate the potential costs and/or savings of a single-payer system. 

Web interface
------

All of the web interface is included in this repository. The system uses a Flask-based API found in the index.py file in the root directory. The javascript, images, and templates used for the website can be found under the /static directory. The system utilizes [SurveyJS](http://surveyjs.io) to manage the series of questions. 

Include printable/savable version with date and time and name of website (url, attribution). Look into image/pdf saving. 

[Instructions for administrators.](/docs/administrators.md)

Excel model
------

The excel-based model uses a series of lookup tables to estimate changes in tax burden and healthcare spending. It estimates these changes by assessing the impact of the California State single-payer bill (SB 562) on households. The model is available in this repository in the /model directory. 

Contributers (alphabetical)
------

- Hank Abrons, MD, past president, California Chapter, Physicians for a National Health Plan
- Alex Goodell, Resident Physician, Stanford University
- Benjamin Herzel, Medical Student, Loma Linda University Physicians for a National Health Plan
- James G Kahn, Professor at University of San Francisco California and past president, California Chapter, Physicians for a National Health Plan 
- Andrew McGuire, Executive Director, California OneCare
- Todd Lash, Managing Director, Tenaya Partners

Funding
-------

The project has not received any institutional funding.

