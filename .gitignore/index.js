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
		message.channel.sendMessage("Commands:\n- *helpfr = Avoir les commandes d'aide en francais\n- *helpes = Have help commands in english");
	}
	if (message.content === prefix + "helpfr"){
		message.author.sendMessage("---COMMANDES BOT FR---\n- *web = Lien de redirection vers le site officiel de DevPub !\n- *CONFIRM = Confime toi afin d'obtenir le grade Membre(En cours de dev...)\n- *");
	}
	if (message.content === prefix + "helpes"){
		message.author.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === 'ping') {
   		message.reply('pong !')
 	}
	if (message.content === prefix + "site"){
		message.channel.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === prefix + "web"){
		message.author.sendMessage("WebSite of DevPub: ....");
	}		
});
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le channel ! ' + member.displayName)
 
    }).catch(console.error)
})
