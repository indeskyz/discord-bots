const { SlashCommandBuilder } = require("@discordjs/builders");
const { VERIFICATION_CHANNEL, SERVER_RULES } = require("../config");
const { filterServer, filterUser } = require("../utils/filters");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("used to verify users"),
  async execute(interaction) {
    const serverName = interaction.channel.name.toLowerCase();
    const { id } = interaction.user
    if (filterServer(serverName, VERIFICATION_CHANNEL) && filterUser(id)) {
      const message = await interaction.reply({
        content: `${SERVER_RULES}\nVerify yourself by clicking the react button`,
        fetchReply: true,
      });
      message.react("✅")
    }
  },
};
