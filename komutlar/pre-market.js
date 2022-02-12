const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let istek = args[0];

  let ppp = await db.fetch(`pre_${message.guild.id}`);
  let para = await db.fetch(`prepara_${message.author.id}`);

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "e?";

  try {
    if (!istek) {
      const e = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/833436840790589441/855173045286862868/banner.png')
        .setDescription(
          `Mevcut ürünler: Premium - 3.000 Puan!\n\nSatın alma: ${prefix}pre-market premium`
        );
      message.channel.send(e);
      return;
    }

    if (istek === "premium") {
      if (ppp == "acik") {
        const embed = new Discord.MessageEmbed()
          .setDescription(`Zaten bu sunucu premium!`)
          .setColor("BLUE")
          .setTimestamp();
        message.channel.send({ embed });
      } else if (para < 3000) {
        message.channel.send(
          `Ne yazık ki yeterli puana sahip değilsin!\nPremium: 3.000 Puan!`
        );
      } else if (para > 3000) {
        message.channel.send(`**___Artık bu sunucu premium!___**`);
        db.add(`prepara_${message.member.id}`, -3000);
        db.set(`pre_${message.guild.id}`, "acik");
      } else if ((para = 3000)) {
        message.channel.send(`**___Artık bu sunucu premium!___**`);
        db.add(`prepara_${message.author.id}`, -3000);
        db.set(`gold_${message.guild.id}`, "acik");
      }
      return;
    }
  } catch (err) {
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "pre-market",
  description: "sa",
  usage: "pre-market"
};
