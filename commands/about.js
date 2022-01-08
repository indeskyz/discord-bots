const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Information about the bot'),
    async execute(interaction){
        await interaction.reply(`
        I'm VOGUE's Custom Bot for Users Who Boost the Server.\n
Whenever you boost the server, you will awarded with a custom command based on your username\n
You can use this to promote your social media, personal artworks, or promote any other platforms you wish.
Optionally, you can use me to have your own custom command that displays a personalized message.\n

To see an example type /vogue
        `);
    }
}
