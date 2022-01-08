const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a pong on success'),
    async execute(interaction){
        await interaction.reply(`pong`);
    }
}
