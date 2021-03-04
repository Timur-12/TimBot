require('dotenv').config()


const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = 'T!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
    console.log('Our bot is raedy to go')
})

client.on('messageDelete', msg => {
    msg.channel.send(`${msg.author} Mesaj Silme!`);
})

client.on('message', msg => {
    if (msg.content == 'Timuru seviyorum') {
        msg.react('❤')
    }

    if (msg.content === '${BOT_PREFIX}${MOD_ME_COMMAND}') {
        modeUser(msg.member)
    }
})

function modUser(member) {
    member.rules.add(816019638609379398)
}

client.login(process.env.BOT_TOKEN)




const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send(':no_entry: Sa-as yazısını açmak için; `!sa-as aç veya kapat`')
  
      message.channel.send(`Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`)
    
  }
  if (args[0] == 'kapat') {
      message.channel.send(` Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`)
    
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: '/sa-as'
};
