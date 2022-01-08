const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#FFB370')
	.setTitle('VOGUE')
	.setURL('https://discord.com/channels/903619628444573786/916315037222715414')
	.setAuthor({ name: 'HAZEL', iconURL: 'https://i.pinimg.com/564x/57/69/12/576912052c618379977e6e7c30c7fd43.jpg', url: 'https://vvasteyrslf.tumblr.com/' })
	.setDescription('INCLUSIVITY IS SEXY')
	.setThumbnail('https://i.pinimg.com/564x/96/5d/30/965d30da8a701bdbaadf7b097dce0e7b.jpg')
	.addFields(
		{ name: 'My Portfolio', value: 'https://www.myPortfolioLink.com' },
		{ name: 'INSPO', value: 'https://www.pinterest.ca/hazeyRAF/omitted/', inline: true },
		{ name: 'Socials', value: 'https://www.socialMediaRuniedMyLife.com/\nhttps://vvasteyrslf.tumblr.com/', inline: true },
	)
	.setImage('https://i.pinimg.com/564x/fe/4e/34/fe4e3442ffbec26bff49b7cf8334f535.jpg')
	.setTimestamp()
	.setFooter({ text: 'By VOGUE', iconURL: 'https://i.pinimg.com/564x/dc/d8/b5/dcd8b554ec26ddc5e1f705d6a6e7374e.jpg' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('vogue')
        .setDescription('an example of a personalized message card'),
    async execute(interaction){
       await interaction.reply({embeds: [exampleEmbed]});
    }
}
