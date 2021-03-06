const Discord = require("discord.js");
const db = require("quick.db");
let botid = ('784517399314432050')
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "e?";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLUE")
    .setFooter(bot.user.username, bot.user.avatarURL())

    message.channel.send(embed);
    return;
  }

  let msj = await db.fetch(`otorolmsj_${message.guild.id}`)
  if (!msj) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Zaten otorol mesajı ayarlanmamış!`
        )
      .setFooter(bot.user.username, bot.user.avatarURL())
        .setColor("BLUE")
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL())
    .setDescription(`Otorol mesajı sıfırlandı!`);
  message.channel.send(embed);

  db.delete(`otorolmsj_${message.guild.id}`);
};

module.exports.conf = {
  aliases: ["otorol-mesaj-sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol-mesaj-sıfırla",
  description: "otorol-mesaj-sıfırla",
  usage: "oto-rol-mesaj-sıfırla"
};
