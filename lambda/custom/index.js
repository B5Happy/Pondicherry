"use strict";

var Alexa = require("alexa-sdk");

const HELP_MESSAGE = 'You can ask me for a resaurant or place to visite, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye! Hope to see you again.';

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to Pondicherry. What are you looking?").listen("Toursim spot or restaurant?");
    this.emit(':responseReady');
  },


  'RestaurantIntent': function () {

    //this.response.speak("What type of restaurant ?").listen("Sorry I don't understand, veg or non veg resaurant?");
    //this.emit(':ask', 'What type of restaurant ?');
    var mytype = this.event.request.intent.slots.type.value;
    if (mytype == "veg" || mytype == "vegetarian") {
        this.response.speak("I will suggest Surguru or Ram hotel.");
    }
    else {
        this.response.speak("I will suggest Atithi or Zaffron hotel.");
    }
    this.emit(':responseReady');
  },

  'TourismIntent': function () {
    this.response.speak("You can visite the beach and enjoy the view or go to the Botanical garden.");
    this.emit(':responseReady');
  },
  
  'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'Unhandled': function () {
        this.emit(':ask', 'I don\'t get it!');
    },
    
}


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};