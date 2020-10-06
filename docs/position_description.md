We are looking for a software developer who has an interest in health economics, projection modeling, or healthcare in general. We are building a simple, transparent web application that allows US citizens to estimate the household-specific costs and savings of implementing a single-payer model of healthcare delivery, such as those proposed by a few of the Democratic Presidential candidates in 2020. Currently, our model evaluates individual's costs and savings under two different bills--one specific to California, and one national-level bill. 

Our current web application is modest and has a straightforward architecture. The economic model was built by a team of health economists using Microsoft Excel. The spreadsheets were then adapted to the [Microsoft Graph API](https://developer.microsoft.com/en-us/graph), which allows for the creation of a simple REST API based on the inputs and outputs of one Excel workbook. We have a simple webserver based in Python/Flask running on a lightweight AWS instance. Users fill out their demographic and salary information using a vanilla JavaScript frontend built with a survey package, [survey.js](https://surveyjs.io/). This request is routed to Microsoft Graph API, and the outputs are displayed for the user. 

The project is open-source. The codebase is available [on GitHub](https://github.com/alexgoodell/single-payer).

We are interested in hiring a full-stack web developer with the following skillset:
- proficiency in Javascript, Python, HTML/CSS, web API protocols, version control systems
- basic server management experience
- experience with Microsoft Graph API, economics, or healthcare may be helpful
