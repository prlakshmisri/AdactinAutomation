$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality for Adactin web application",
  "description": "Contains 2 test scenario with login details",
  "id": "login-functionality-for-adactin-web-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TC"
    }
  ]
});
formatter.before({
  "duration": 2835557,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User hold for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_launch_the_browser()"
});
formatter.result({
  "duration": 11726768323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "AdactinStepDefinition.user_hold_for_seconds(int)"
});
formatter.result({
  "duration": 2989956439,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User verify for valid login credentials",
  "description": "",
  "id": "login-functionality-for-adactin-web-application;user-verify-for-valid-login-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should verify the Welcome to AdactIn Group of Hotels is displayed in the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters the username in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters the password in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks the Login button in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User hold for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks the Logout button in home page",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_verify_the_Welcome_to_AdactIn_Group_of_Hotels_is_displayed_in_the_login_page()"
});
formatter.result({
  "duration": 362397049,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_the_username_in_the_login_page()"
});
formatter.result({
  "duration": 292907686,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_the_password_in_the_login_page()"
});
formatter.result({
  "duration": 236237883,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_Login_button_in_the_login_page()"
});
formatter.result({
  "duration": 2100916489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "AdactinStepDefinition.user_hold_for_seconds(int)"
});
formatter.result({
  "duration": 3002377335,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_Logout_button_in_home_page()"
});
formatter.result({
  "duration": 606899381,
  "status": "passed"
});
formatter.after({
  "duration": 154667,
  "status": "passed"
});
});