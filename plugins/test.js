const { command, isPrivate } = require("../lib/");
const { isAdmin, parsedJid } = require("../lib");

command(
  {
    pattern: "kickall",
    fromMe: isPrivate,
    desc: "Adds a person to group",
    type: "group",
  },
  async (message, match) => {
    let { participants } = await message.client.groupMetadata(message.jid);
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply("_I'm not admin_");

    for (let key of participants) {
      let jid = parsedJid(key.id);
      await message.kick(jid);
      await message.reply(`@${jid[0].split("@")[0]} kicked`, {
        mentions: jid,
      });
    }
  }
);
