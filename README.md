# survey-app
Mobile version of survey management app allowing CRUD operations on surveys (as a coordinator user), filling them (respondent user) and displaying results 
as well as creating accounts and authenticating.    

Demo of this app can be found here: https://drive.google.com/file/d/1vmRrzFsmEKHSAdrNBs2GpsfjImeBrWTc/view?usp=sharing
Backend module for this app can be found in another repo: https://github.com/Szelemetko/SurveyApp.  

<sub>In order to run this app on your own, change url to backend server in ./api/api.js file (remember that it has to be https - you can use https://ngrok.com for that),
add this url to CORS settings in beforementioned backend module (alter SurveyResultController.java, UserController.java, SurveyResultController.java files) and launch it before executing mobile front end app. </sub>


### Used technologies/tools
* Javascript
* React Native
* npm
* Expo

