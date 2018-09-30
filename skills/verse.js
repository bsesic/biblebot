const fetchJson = require('node-fetch-json');
const fetch = require('node-fetch');
const jsonlint = require('jsonlint');
const URLSearchParams = require('url');

module.exports = function(controller) {

  controller.on('read_verse', function(bot, message) {
    console.log("controller called.");
    //console.log(message.match[1]);
    //console.log(message.match[2]);

    var params = message.match[1];
    
    if(message.match[2]){
      params += "&v=" + message.match[2];
    }
    //console.log(params);
    
    var returnmessage = "";
    var result;
    var promise;
    
    promise = new Promise(async function(resolve, reject) {
       await fetch('http://getbible.net/json?passage=' + params, {method: 'POST'})
    .then(res => res.text())
    .then(body => resolve(body));
      });
  
  
  promise.then(function(value) {
    //console.log(value);
    result = value;
    result = result.slice(1, -2);
    result = result.replace("[", "");
    result = result.replace("]", "");
    //console.log(result);
    
    result = JSON.parse(result);
      
    //console.log(result);
      //while loop for nested objects
     for (var res in result.book.chapter){
       //console.log(result.book.chapter[res].verse);
          //console.log(res.verse);
          returnmessage += result.book.chapter[res].verse;
          //console.log(returnmessage);
        }
      // return the whole message to the bot.
      bot.reply(message, 'Verse '+message.match[1] + ': ' + returnmessage)
      
  });
   
    
  
  
  });
  
  controller.hears('verse (.*) (.*)', ['direct_message', 'direct_mention'], function(bot, message){
    console.log("1");
      controller.trigger('read_verse', [bot, message]);
  });
  
  controller.hears('verse (.*)', ['direct_message', 'direct_mention'], function(bot, message){
        console.log("2");
      controller.trigger('read_verse', [bot, message]);
  });
  
  
  controller.hears('verse', ['direct_message', 'direct_mention'], function(bot, message){
        console.log("3");
        bot.reply(message, 'Please give me a verse to read. Like: Jn3:16 kjv');
  });


  controller.hears('translation', ['direct_message', 'direct_mention'], function(bot, message){
    bot.reply(message, 'Do you want to change your default translation?')
  });
  
}