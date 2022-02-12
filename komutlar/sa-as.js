const Discord = require("discord.js");

const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "e?";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLUE");

    message.channel.send(embed);
    return;
  }
  const ee = args.join(" ");
  if (!ee)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Hatalı kullanım!")
        .setDescription(`${prefix}sa-as aç && kapat`)
        .setColor("BLUE")
    );
  if (ee === "aç") {
    db.set(`saas_${message.guild.id}`, "acik");
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("İşlem Başarılı!")
        .setColor("BLUE")
        .setDescription("Bundan sonra selam verildiğinde bot cevap verecek!")
    );
  } else if (ee === "kapat") {
    db.delete(`saas_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("İşlem Başarılı!")
        .setColor("BLUE")
        .setDescription("Bundan sonra selam verildiğinde bot cevap vermeyecek!")
        .setImage('https://cdn.discordapp.com/attachments/833436840790589441/855173045286862868/banner.png')
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["saas"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "sa-as",
  description: "Sa-As sistemini ayarlarsınız.",
  usage: "sa-as aç && kapat"
};
