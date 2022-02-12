const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('784517399314432050') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Moderasyon Komut Listesi`)
        .setDescription(` • | **${ayarlar.prefix}ban** : Etiketlediğiniz Kullanıcıyı Sunucudan Yasaklarsınız.\n • | **${ayarlar.prefix}kick** : Etiketlediğiniz Kullanıcıyı Sunucudan Atarsınız.\n • | **${ayarlar.prefix}unban** : İdsini Girdiğiniz Kullanıcının Sunucudaki Yasaklamasını Kaldırırsınız.\n • | **${ayarlar.prefix}kanal-kilit** : Komutu Yazdığınız Kanalı Belirttiğiniz Süre Boyunca Mesajlaşmaya Kapatır.\n • | **${ayarlar.prefix}mute** : Etiketlediğiniz Kullanıcıyı Belirtiğiniz Süre Kadar Mutelersiniz.\n • | **${ayarlar.prefix}takma-ad** : Etiketlediğiniz Kullanıcının Kullanıcı Adını Ayarlarsınız.\n • | **${ayarlar.prefix}rol-al** : Etiketlediğiniz Kullanıcıya Belirttiğiniz Rolü Verirsiniz.\n • | **${ayarlar.prefix}rol-al** : Etiketlediğiniz Kullanıcıdan Belirttiğiniz Rolü Alırsınız.\n • | **${ayarlar.prefix}reklam-taraması** : Özel Durumunda ve Oynuyor Mesajında Reklam Bulunduran Kullanıcıları Listelersiniz.\n • | **${ayarlar.prefix}yavasmod** : Komutu Yazdığınız Kanalda Mesaj Yazma Süresini Düzenlersiniz.\n • | **${ayarlar.prefix}temizle** : Komutu Kullandığınız Kanalda Belirttiğiniz Kadar Mesajı Silersiniz.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677145750043361320&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/YETK66G) **|** [Web Sitemiz](https://ewing.ga/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`Ewing | Bot Sürümü : v4.4.4 | Varsayılan Prefix : ${ayarlar.prefix}`, client.user.avatarURL)
        .setImage('https://cdn.discordapp.com/attachments/833436840790589441/855173045286862868/banner.png')
        return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod','moderasyon','yetkili'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: '',
  usage: ''
};