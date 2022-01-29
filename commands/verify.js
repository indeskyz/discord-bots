const { SlashCommandBuilder } = require('@discordjs/builders');
const { SERVER_NAMES } = require('../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('used to verify users'),
    async execute(interaction){
        const serverName = interaction.guild.name.toLowerCase();
        if(SERVER_NAMES.includes(serverName)){
            const message = await interaction.reply({content: 'Verify yourself by clicking the react button!', fetchReply:true});
            message.react('✅')
            .then(()=> console.log(interaction.member))
        }
    }
}

