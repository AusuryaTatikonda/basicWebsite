const request = require('request');
const TelegramBot = require('node-telegram-bot-api');
const token = '6234154507:AAEYZT8t_s6eGTp_EQF518jo21pj6SBc9j0';

const bot = new TelegramBot(token, {polling: true});

bot.on('message' , function(msg){
    request('https://omdbapi.com/?t='+msg.text+'&apikey=7551ec5a', function (error, response, body) {
    if(msg.text=="/start"){
      bot.sendMessage(msg.chat.id,"Hello"+" "+msg.chat.first_name); 
      bot.sendMessage(msg.chat.id, "Welcome");
    }
    else{
  console.log(JSON.parse(body).Response);
  let key=JSON.parse(body);
  if(JSON.parse(body).Response=="True"){
    bot.sendMessage(msg.chat.id,"Movie Title: "+key.Title)
    bot.sendMessage(msg.chat.id,"Movie Genre: "+key.Genre)
    bot.sendMessage(msg.chat.id,"Movie Language: "+key.Language)
    bot.sendMessage(msg.chat.id,"Released Date: "+key.Released)
    bot.sendMessage(msg.chat.id,"Movie Runtime: "+key.Runtime)
    bot.sendMessage(msg.chat.id,"Movie Director: "+key.Director)
    bot.sendMessage(msg.chat.id,"Movie Writers: "+key.Writer)
    bot.sendMessage(msg.chat.id,"Movie Actors: "+key.Actors)
    bot.sendMessage(msg.chat.id,"Awards: "+key.Awards)
    bot.sendMessage(msg.chat.id,"Movie Director: "+key.imdbRating)
    bot.sendMessage(msg.chat.id,"Movie Director: "+key.BoxOffice)
    bot.sendMessage(msg.chat.id,"Movie Director: "+key.Poster)
  }
  else{
    bot.sendMessage(msg.chat.id, "oops! wrong details")
  }
}
});
})
