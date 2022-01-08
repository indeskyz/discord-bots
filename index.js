const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { VOUGE_BOT_TOKEN } = require('./config.js');

//Initialize client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//Stores all the registered commands
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//Grab all the command files and set them
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

//Grab event files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

//Listen for commands from users in the server
client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()){
        return;
    }
    const command = client.commands.get(interaction.commandName);
    if(!command){
        return;
    }
    try{
        await command.execute(interaction);
    }catch(err){
        console.error(err);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral:true });
    }
});

//login to discord using token
client.login(VOUGE_BOT_TOKEN);

