const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('A R W È N | R E G I S T E R')

  .addField("• | a.e",`__Kayıtsız kullanıcıyı erkek olarak kayıt edersiniz.__`)
  
  .addField("• | a.k",`__Kayıtsız kullanıcıyı kız olarak kayıt edersiniz.__`)
  
  .addField("• | a.kayıtsız",`__Kayıt edilmiş bir kullanıcıyı kayıtsız duruma getirirsiniz.__`)
  
  .addField("• | a.stat",`__Toplam kayıt istatistiklerinizi görürsünüz.__`)

  .addField("• | a.isimler",`__Etiketlediğiniz kullanıcının daha önce kaç defa ve hangi isimler ile kayıt olduğunu görürsünüz.__`)

  .addField("• | a.topteyit",`__Sunucudaki yetkililerin kaç kişi kayıt ettiğini görürsünüz.__`)

  .addField("• | a.sıfırla",`__Etiketlediğiniz kişinin kayıtlarını sıfırlar.__`)
  
  .setDescription("A R W È N | R E G I S T E R bilgilendirme menüsü" )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}