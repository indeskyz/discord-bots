const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with basic server info'),
    async execute(interaction){
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
    }
}
