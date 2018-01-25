const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('SGB is ready ');
bot.user.setActivity(`over ${bot.guilds.size} servers.. ;)`,{type : "WATCHING"});
});

bot.login();
