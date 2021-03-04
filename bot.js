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
    msg.channel.send(`${msg.member} Mesaj Silme!`);
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
