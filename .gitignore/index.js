const  Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
	bot.user.setActivity("Commands: *help");
	console.log("Bot Connected On The Server !");
});

bot.login("NDA5Njg4NDY1MDM1NDkzMzc2.DViQDg.r1k_SHvXEO_q6X_azQHT2vjCgUw");

bot.on('message', message => {
	let confirmed = message.channel.guild.roles.find('name', '✅MEMBERS✅')
	let membre = message.channel.guild.members.find('id', message.author.id)
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Commands:\n- *helpfr = Avoir les commandes d'aide en francais\n- *helpuk = Have help commands in english");
	}
	if (message.content === prefix + "helpfr"){
		message.author.sendMessage("---COMMANDES BOT FR---\n- *web = Lien de redirection vers le site officiel de DevPub !\n- *CONFIRM = Confime toi afin d'obtenir le grade Membre(En cours de dev...)\n- *");
		message.reply("Les commandes t'ont été envoyé en mp ; va jeter un coup d'oeil !");
	}
	if (message.content === prefix + "helpuk"){
		message.author.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === prefix + "candidfr"){
		message.author.sendMessage("Si tu veux");
	}
	if (message.content === 'ping') {
   		message.reply('pong !')
 	}
	if (message.content === prefix + "confirm"){
		membre.addRole(confirmed);
       		message.reply("\nUK:you are now a member so you have access to voice channels \nFR:Tu es désormais membre tu as donc accé aux channel vocaux ");
    	}
	if (message.content === prefix + "site"){
		message.channel.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === prefix + "web"){
		message.author.sendMessage("WebSite of DevPub: ....");
	}		
});
bot.on('onGuildMemberAdd', (member) => {
	let visit = message.channel.guild.roles.find('name', '👨VISITORS👧')
	let player = message.channel.guild.members.find('id', guildMemberAdd.author.id)
	player.addRole(visit);
	
})


