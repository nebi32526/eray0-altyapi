exports.run = function(client, message, args) {

message.channel.send(`**:satellite: Anlık Bot Bilgileri**`);
message.channel.send(`Sunucu Sayısı; **${client.guilds.size.toLocaleString()}** `);
message.channel.send(`Kullanıcılar; **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`);
message.channel.send(`Ping ; **${client.ping}**`);
    };

module.exports.conf = {
  enabled: true, // Aktifmi , Değilmi - true , false
  guildOnly: false, // Sadece sunucudamı olsun?
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'], // JKısaltmalar
  permLevel: 0 // Yetki sistemi (size ait)
};

module.exports.help = {
  name: 'istatistik',
  description: 'Bot Hakkındaki İstatikleri Sunar ',
  usage: 'istatistik'
};