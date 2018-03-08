const fs = require('fs');
const  Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
	bot.user.setActivity("Commands: *help");
	console.log("Bot Connected On The Server !");
});

bot.login(process.env.TOKEN)
    .then(() =>
    {
        console.log(`The bot ${bot.user.username} is now connected on the discord server`)
    })
    .catch(() =>
    {
        console.error('The token is not valid ')
    })

bot.on('message', message => {
	let confirmed = message.channel.guild.roles.find('name', '✅MEMBERS✅')
	let membre = message.channel.guild.members.find('id', message.author.id)
	let dev = message.channel.guild.roles.find('name', 'DEV-TEST')
	let fmembre = message.channel.guild.members.find('id', message.author.id)
	let umembre = message.channel.guild.members.find('id', message.author.id)
  	if(message.content === prefix + "botinfos"){

    	let bicon = bot.user.displayAvatarURL;
    	let botembed = new Discord.RichEmbed()
    	.setDescription("Bot Information")
    	.setColor("#15f153")
    	.setThumbnail(bicon)
    	.addField("Bot Name", bot.user.username)
    	.addField("Created On", bot.user.createdAt);

    	return message.channel.send(botembed);
  	}
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Commands:\n- *helpfr = Avoir les commandes d'aide en francais\n- *helpuk = Have help commands in english");
	}
	if (message.content === prefix + "helpfr"){
		message.author.sendMessage("---COMMANDES BOT FR---\n- *web = Lien de redirection vers le site officiel de DevPub !\n- *confirm = Confime toi afin d'obtenir le grade Membre et avoir des avantages\n- *candid = Obtien le lien pour poster ta candidature (sur le site web)\n- *dev = Obtien le grade Dev-test et te donne le lien pour faire ta candidature et peut etre obtenir le grade Developper\n - *");
		message.reply("Les commandes t'ont été envoyé en mp ; va jeter un coup d'oeil !");
	}
	if (message.content === prefix + "helpuk"){
		message.author.sendMessage("Commandes Bot Anglaise A Definir !");
	}
	if (message.content === prefix + "candid"){
		message.author.sendMessage("\nUK:Send your candidature to have more permission in the discord server \nLINK:https://devpub.com/candid.html\nFR:Envoie ta candidature pour obtenir un grade et sur le serveur discord et avoir plus de permissions\n LIEN:https://devpub.com/candid.html ");
	}
	if (message.content === 'ping') {
   		message.reply('pong !')
	}
	if (message.content === prefix + "dev"){
		membre.addRole(dev);
       		message.reply("\nUK:you are now a developper test if you want become developper send your candidature with *candid \nFR:Tu es désormais developpeur test si tu veux devenir developpeur envoie ta candidature en faisant *candid");
    	}
	if (message.content === prefix + "undev"){
		umembre.removeRole(dev);
       		message.reply("\nUK: You have remove your dev test permissions \nFR:Tu as enlevé ton grade Dev-Test ");
    	}	
	if (message.content === prefix + "confirm"){
		fmembre.addRole(confirmed);
       		message.reply("\nUK:you are now a member so you have access to voice channels \nFR:Tu es désormais membre tu as donc accé aux channel vocaux ");
    }
	if (message.content === prefix + "web"){
		message.author.sendMessage("WebSite of DevPub: ....");
	}
	if(message.content === prefix + "ban  ")
	
bot.on('guildMemberAdd', (visitor) =>
{
    let channel = visitor.guild.channels.find('name', 'welcome')
    let nonMemberRole = visitor.guild.roles.find('name', 'VISITORS')
 
    if (channel)
    {
        channel.send('Bienvenue ' + visitor + ' sur le serveur ' + visitor.guild.name + ' !')
    }
 
    if (nonMemberRole)
    {
         visitor.addRole(nonMemberRole)
    }
})})
