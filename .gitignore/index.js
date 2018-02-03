const  Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
	bot.user.setGame("Commands: *help");
	console.log("Bot Connected On The Server !");
});

bot.login("NDA1MDQ1OTY2OTU4NDkzNzI2.DVdrDQ.ywRFq2JcwR80PRdhrv4Dh7l5qi4");

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Liste des commandes:\n- *helpfr = Avoir les commandes d'aide en francais\n- *helpes = Have help commands in english");
	}
	if (message.content === prefix + "helpfr"){
		message.channel.sendMessage("Commandes Bot Francaise A Definir !");
	}
	if (message.content === prefix + "helpes"){
		message.channel.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === 'ping') {
   		message.reply('pong !')
 	 }
});
