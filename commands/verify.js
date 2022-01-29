const fs = require("fs");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { SERVER_NAMES } = require("../config");
const directory = __dirname;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("used to verify users"),
  async execute(interaction) {
    const serverName = interaction.guild.name.toLowerCase();
    if (SERVER_NAMES.includes(serverName)) {
      const message = await interaction.reply({
        content: "Verify yourself by clicking the react button!",
        fetchReply: true,
      });
      message
        .react("✅")
        .then(() => {
          fs.writeFile(
            `${directory}/verifyResults.txt`,
            JSON.stringify(interaction.user),
            { flags: "a" },
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        })
        .then(() => {
          fs.writeFile(
            `${directory}/resultsPartTwo.txt`,
            JSON.stringify(interaction.member),
            { flags: "a" },
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        });
    }
  },
};
