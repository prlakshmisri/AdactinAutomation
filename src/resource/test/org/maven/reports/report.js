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
formatter.scenarioOutline({
  "line": 386,
  "name": "Verify booking itinerary is reflecting the correct information in booking confirmation page",
  "description": "",
  "id": "login-functionality-for-adactin-web-application;verify-booking-itinerary-is-reflecting-the-correct-information-in-booking-confirmation-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 385,
      "name": "@TC16"
    }
  ]
});
formatter.step({
  "line": 387,
  "name": "User should verify the Welcome to AdactIn Group of Hotels is displayed in the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 388,
  "name": "User enters the username in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 389,
  "name": "User enters the password in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "User clicks the Login button in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "User hold for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "User select the location using drop down \u0027\u003cLocation\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 393,
  "name": "User select the hotel creep using drop down \u0027\u003cHotel Name\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "User select the room type using drop down \u0027\u003cRoom Type\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "User select the no of rooms using drop down \u0027\u003cNo of Rooms\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "User enter the today check-in date \u0027\u003cCheckin Date\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "User enter the tomorrow check-out date \u0027\u003cCheckout Date\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "User select the adult per room using drop down \u0027\u003cNo of Adults\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "User select no children per room using drop down",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "User clicks the radio button in the hotel search page",
  "keyword": "When "
});
formatter.step({
  "line": 403,
  "name": "User clicks the continue button in the hotel search page",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 406,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "User enters billing address",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "User enters 16 digit credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "User selects the card type",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "User selects the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "User selects the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "User enters the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "User clicks the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "User gets the order id no",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "User confirms that order no is generated or not",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "User clicks the My Itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "User fetch datas from webtable to excel",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "User confirms that order no is generated is same as in the booking confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 421,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "When "
});
formatter.step({
  "line": 422,
  "name": "User clicks the Logout button in home page",
  "keyword": "And "
});
formatter.examples({
  "line": 424,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-web-application;verify-booking-itinerary-is-reflecting-the-correct-information-in-booking-confirmation-page;",
  "rows": [
    {
      "cells": [
        "Hotel Name",
        "Location",
        "Room Type",
        "Checkin Date",
        "Checkout Date",
        "No of Rooms",
        "No of Adults"
      ],
      "line": 425,
      "id": "login-functionality-for-adactin-web-application;verify-booking-itinerary-is-reflecting-the-correct-information-in-booking-confirmation-page;;1"
    },
    {
      "cells": [
        "\"Hotel Creek\"",
        "\"Sydney\"",
        "\"Standard\"",
        "\"18/03/2019\"",
        "\"19/03/2019\"",
        "2",
        "1"
      ],
      "line": 426,
      "id": "login-functionality-for-adactin-web-application;verify-booking-itinerary-is-reflecting-the-correct-information-in-booking-confirmation-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2879113,
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
  "duration": 5143584509,
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
  "duration": 3019953342,
  "status": "passed"
});
formatter.scenario({
  "line": 426,
  "name": "Verify booking itinerary is reflecting the correct information in booking confirmation page",
  "description": "",
  "id": "login-functionality-for-adactin-web-application;verify-booking-itinerary-is-reflecting-the-correct-information-in-booking-confirmation-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 385,
      "name": "@TC16"
    },
    {
      "line": 1,
      "name": "@TC"
    }
  ]
});
formatter.step({
  "line": 387,
  "name": "User should verify the Welcome to AdactIn Group of Hotels is displayed in the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 388,
  "name": "User enters the username in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 389,
  "name": "User enters the password in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "User clicks the Login button in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "User hold for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "User select the location using drop down \u0027\"Sydney\"\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 393,
  "name": "User select the hotel creep using drop down \u0027\"Hotel Creek\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "User select the room type using drop down \u0027\"Standard\"\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "User select the no of rooms using drop down \u00272\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "User enter the today check-in date \u0027\"18/03/2019\"\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "User enter the tomorrow check-out date \u0027\"19/03/2019\"\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "User select the adult per room using drop down \u00271\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "User select no children per room using drop down",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "User clicks the radio button in the hotel search page",
  "keyword": "When "
});
formatter.step({
  "line": 403,
  "name": "User clicks the continue button in the hotel search page",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 406,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "User enters billing address",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "User enters 16 digit credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "User selects the card type",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "User selects the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "User selects the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "User enters the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "User clicks the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "User gets the order id no",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "User confirms that order no is generated or not",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "User clicks the My Itinerary button",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "User fetch datas from webtable to excel",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "User confirms that order no is generated is same as in the booking confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 421,
  "name": "User waits for \u00273\u0027 seconds",
  "keyword": "When "
});
formatter.step({
  "line": 422,
  "name": "User clicks the Logout button in home page",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_verify_the_Welcome_to_AdactIn_Group_of_Hotels_is_displayed_in_the_login_page()"
});
formatter.result({
  "duration": 201859200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_the_username_in_the_login_page()"
});
formatter.result({
  "duration": 339828596,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_the_password_in_the_login_page()"
});
formatter.result({
  "duration": 336681483,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_Login_button_in_the_login_page()"
});
formatter.result({
  "duration": 2416692630,
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
  "duration": 3001543557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 43
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_location_using_drop_down(String)"
});
formatter.result({
  "duration": 351626379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 46
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_hotel_creep_using_drop_down(String)"
});
formatter.result({
  "duration": 322854365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 44
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_room_type_using_drop_down(String)"
});
formatter.result({
  "duration": 377397501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_no_of_rooms_using_drop_down(String)"
});
formatter.result({
  "duration": 357738381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18/03/2019",
      "offset": 37
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_today_check_in_date(String)"
});
formatter.result({
  "duration": 325339256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/03/2019",
      "offset": 41
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_tomorrow_check_out_date(String)"
});
formatter.result({
  "duration": 293833020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_adult_per_room_using_drop_down(String)"
});
formatter.result({
  "duration": 293987687,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_no_children_per_room_using_drop_down()"
});
formatter.result({
  "duration": 209215204,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1948093755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "AdactinStepDefinition.user_waits_for_seconds(int)"
});
formatter.result({
  "duration": 3010689783,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_radio_button_in_the_hotel_search_page()"
});
formatter.result({
  "duration": 155058736,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_continue_button_in_the_hotel_search_page()"
});
formatter.result({
  "duration": 1458032203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "AdactinStepDefinition.user_waits_for_seconds(int)"
});
formatter.result({
  "duration": 3007359114,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_first_name()"
});
formatter.result({
  "duration": 529297125,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_last_name()"
});
formatter.result({
  "duration": 315144140,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_billing_address()"
});
formatter.result({
  "duration": 343397931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enters_digit_credit_card_number(int)"
});
formatter.result({
  "duration": 327371257,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_selects_the_card_type()"
});
formatter.result({
  "duration": 321591698,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_selects_the_expiry_month()"
});
formatter.result({
  "duration": 368980164,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_selects_the_expiry_year()"
});
formatter.result({
  "duration": 307195692,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_the_cvv_number()"
});
formatter.result({
  "duration": 299942355,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_book_now_button()"
});
formatter.result({
  "duration": 135231171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "AdactinStepDefinition.user_waits_for_seconds(int)"
});
formatter.result({
  "duration": 3011553338,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_gets_the_order_id_no()"
});
formatter.result({
  "duration": 3909571960,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_confirms_that_order_no_is_generated_or_not()"
});
formatter.result({
  "duration": 104421824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "AdactinStepDefinition.user_waits_for_seconds(int)"
});
formatter.result({
  "duration": 3018992009,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_My_Itinerary_button()"
});
formatter.result({
  "duration": 8464639318,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_fetch_datas_from_webtable_to_excel()"
});
formatter.result({
  "duration": 1719984320,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_confirms_that_order_no_is_generated_is_same_as_in_the_booking_confirmation_page()"
});
formatter.result({
  "duration": 32889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "AdactinStepDefinition.user_waits_for_seconds(int)"
});
formatter.result({
  "duration": 3005262225,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_clicks_the_Logout_button_in_home_page()"
});
formatter.result({
  "duration": 1460013983,
  "status": "passed"
});
formatter.after({
  "duration": 244889,
  "status": "passed"
});
});