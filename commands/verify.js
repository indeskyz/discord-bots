const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('used to verify users'),
    async execute(interaction){
        if(interaction.guild.name === 'verify' || 'verification'){
            await interaction.reply({content: 'Verify yourself by clicking the react button!', fetchReply:true});
            message.react('✅')
            .then(()=> console.log(interaction.member))
        }
    }
}

