const { SlashCommandBuilder } = require('@discordjs/builders');

const currentTime = new Date().getTime();


module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Displays basic information about yourself'),
    async execute(interaction){
        const username = interaction.user.username;
        const serverJoinDate = interaction.member.joinedTimestamp;
        const calculateTimeDifference = currentTime - serverJoinDate;
        const convertTimeToDays = Math.floor(calculateTimeDifference / (1000*60*60*24));
        console.log(convertTimeToDays);
        const memberSince = convertTimeToDays === 0 ? `They just joined the server today!` : `${convertTimeToDays} Days`;
        await interaction.reply(`Your Profile:\n
Created At: ${interaction.user.createdAt}\n
${username} Has Been a Part of the Server For:\n${memberSince}\n
ID: ${interaction.user.id}\n
Avatar URL: ${interaction.user.avatarURL()}`);
    }
}
