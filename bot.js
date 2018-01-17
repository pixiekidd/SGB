const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--
bot.commands = new Discord.Collection();
fs.readdir('./commands/',(err,files) =>{

    if(err) console.error(err);
     var jsfiles = files.filter(f => f.split('.').pop()==='js');
     if(jsfiles.length<= 0){console.log('No commands found');}
     else{console.log(jsfiles.length + 'founded');}

     jsfiles.forEach((f,i) =>{
         var cmds = require(`./commands/${f}`);
         console.log(`command ${f} loading....`);
         bot.commands.set(cmds.config.command,cmds);
     })
})


bot.on('message',msg =>{
var prefix = '!';
var cont = msg.content.slice(prefix.length).split(" ");
var args = cont.slice(1);

if(!msg.content.startsWith(prefix)) return;

var cmd = bot.commands.get(cont[0]);
if(cmd) cmd.run(bot,msg,args);
});



bot.on('ready',()=> {
console.log('SGB is ready ');
bot.user.setActivity(`over ${bot.guilds.size} servers.. ;)`,{type : "WATCHING"});
});

bot.login();
