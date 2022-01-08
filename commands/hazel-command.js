const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hazel')
        .setDescription('Replies with a greeting'),
    async execute(interaction){
        console.log(interaction.member.joinedTimestamp)
        await interaction.reply(`
        Hazel is the one who created me.\n
Hazel used to model part time & worked within the fashion industry as a stylist whilist studying computer engineering. 
Staying within the arts industry, they now develop software and web applications at a consulting firm.
        `);
    }
}
