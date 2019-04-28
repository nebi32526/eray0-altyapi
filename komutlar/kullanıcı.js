const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
 .addField('Afk', 'Kullanımı : e!afk sebep')
    .addField('Aşk Ölçer', 'Kullanımı : e!aşkölçer')
.addField('Kullanıcı Bilgim', 'Kullanımı : e!kullanıcı-bilgim')
    .addField('Düello', 'Kullanımı : e!düello')
.addField('CSGO', 'Kullanımı : e!csgo')
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: ''
};