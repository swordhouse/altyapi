const Discord = require("discord.js");
const db = require("quick.db");
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

  let hedef = args[0];
  let kanal = message.mentions.channels.first();
  if (!hedef) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`Lütfen bir hedef belirtiniz!`)
      .setFooter(bot.user.username, bot.user.avatarURL())
        .setColor("BLUE")
    );
  }
  
  if(hedef < message.guild.memberCount){
        return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`Bu hedefi zaten aşmışsınız!`)
          .setFooter(bot.user.username, bot.user.avatarURL())
        .setColor("BLUE")
    );
  }
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`Lütfen bir kanal belirtiniz!`)
      .setFooter(bot.user.username, bot.user.avatarURL())
        .setColor("BLUE")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(
      `Sayaç kanalı; ${kanal}\nHedefi; ${hedef} olarak ayarlandı!`
    )
    .setImage('https://cdn.discordapp.com/attachments/833436840790589441/855173045286862868/banner.png')
  .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);

  db.set(`sayaçhedef_${message.guild.id}`, hedef);
  db.set(`sayaçkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["sayaç-ayarla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "sayaç",
  description: "sayaç",
  usage: "sayaç"
};
