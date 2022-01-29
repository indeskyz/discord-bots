const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const { VOUGE_BOT_TOKEN, SERVER_ROLES, VERIFICATION_CHANNEL } = require("./config.js");
const { filterReaction, filterServer } = require("./utils/filters.js");

//Initialize client
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

//Stores all the registered commands
client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

//Grab all the command files and set them
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

//Grab event files
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

//Check if user has been verified or not
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Fetching message failed ", error);
      return;
    }
  }
  const { name } = reaction.message.channel;
  if (!user.bot && filterReaction(reaction.emoji.name) && filterServer(name, VERIFICATION_CHANNEL)) {
    const verifiedUserRole = reaction.message.guild.roles.cache.find(
      (r) => r.name === SERVER_ROLES.test);
    const { guild } = reaction.message;
    const member = guild.members.cache.find((member) => member.id === user.id);
    member.roles.add(verifiedUserRole);
  }
});

//Listen for commands from users in the server
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const command = client.commands.get(interaction.commandName);
  if (!command) {
    return;
  }
  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

//login to discord using token
client.login(VOUGE_BOT_TOKEN);
