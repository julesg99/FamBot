import { Events } from "discord.js";

// executes when the 'Client' becomes ready for use
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Running...\nLogged in as ${client.user.tag}`);
  },
};
