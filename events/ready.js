module.exports = {
  name: "ready",
  once: true,
  execute(client) {console.log(`Successfully Logged Into Server
Logged Into Server As: ${client.user.tag}`);
  },
};
