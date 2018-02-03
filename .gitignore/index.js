const  Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
	bot.user.setGame("Commandes: *help");
	console.log("Connected");
});

bot.login("NDA1MDQ1OTY2OTU4NDkzNzI2.DVdrDQ.ywRFq2JcwR80PRdhrv4Dh7l5qi4");

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Liste des commandes:\n-*helpfr = Avoir les commandes d'aide en francais\n-*helpes = Have help commands in english");
	}
	if (message.contact === "Salut"){
		message.reply("Bien le bonjour !");
		console.log("Commande Salut effectué");
	}
});
