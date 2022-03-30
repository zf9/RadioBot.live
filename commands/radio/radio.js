const Discord = require('discord.js');
const config = require('../../config/bot');
const snekfetch = require("snekfetch")

module.exports = {
    name: 'radio',
    aliases: ['r'],
    category: 'radio',
    utilisation: '{prefix}radio [Radio Station Name]',
    async execute(client, message, args) {
        if (!message.guild) return;
        let RadioStation = parseInt(args)
        if(!args[0]) return message.channel.send(`Please Provide A Valid Command. For More Info Do : ${config.discord.prefix}help`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        const permissions = message.member.voice.channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send(`I don't have permission to join your channel!`).catch(console.error);
        };
        if (!permissions.has('SPEAK')) {
            return message.channel.send(`I don't have permission to speak in your channel!`).catch(console.error);
        };

        try 
        {
            console.log(`${RadioStation} | ${args}`)

            if (args == "helpother")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`Other Radio List`, ``, `https://radiobot.live/commands.html#/Other`)
                .addFields(
                  { name: `${config.discord.prefix}radio hits94`, value: '[Hits 94 | hits94.com]' },
                  { name: `${config.discord.prefix}radio heartuk`, value: '[Heart Edinburgh | heart.co.uk/edinburgh]' },
                  { name: `${config.discord.prefix}radio forth1`, value: '[Forth 1 | planetradio.co.uk/forth]' },
                  { name: `${config.discord.prefix}radio bbc1`, value: '[BBC Radio 1 | bbc.co.uk]' },
                  { name: `${config.discord.prefix}radio bbc2`, value: '[BBC Radio 2 | bbc.co.uk]' },
                  { name: `${config.discord.prefix}radio ghrs`, value: '[Greatest Hits Radio Somerset | planetradio.co.uk]' },
                  { name: `${config.discord.prefix}radio maximafm`, value: '[Maxima FM Madrid | unknown url]' },
                  { name: `${config.discord.prefix}radio erafm`, value: '[Era | era.je]' },
                  { name: `${config.discord.prefix}radio hitz.fm`, value: '[Hitz | hitz.com.my]' },
                  { name: `${config.discord.prefix}radio uaekadak`, value: '[Radio Kadak | adradio.ae/Radio-kadak]' },
                  { name: `${config.discord.prefix}radio deejayit`, value: '[Deejay Italy | deejay.it]' },
                  { name: `${config.discord.prefix}radio rtlit`, value: '[rtl Italy | rtl.it]' },
                  { name: `${config.discord.prefix}radio virginradio`, value: '[VirginRadio | virginradio.it]' },
                  { name: `${config.discord.prefix}radio rmfon`, value: '[RFM On | rmfon.pl]' },
                  { name: `${config.discord.prefix}radio eska`, value: '[Radio eska | eska.pl]' },
                  { name: `${config.discord.prefix}radio planetafm`, value: '[Planeta FM | unknown url]' },
                  { name: `${config.discord.prefix}radio nporadio2`, value: '[NPO Radio 2 | unknown url]' },
                  { name: `${config.discord.prefix}radio thefan`, value: '[97.1 The Fan | 971thefan.com]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }

            if (args == "helpau")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`AU Radio List`, ``, `https://radiobot.live/commands.html#/AU`)
                .addFields(
                    { name: `${config.discord.prefix}radio kiis1011`, value: '[KIIS 101.1 | kiis1011.com.au]' },
                    { name: `${config.discord.prefix}radio triplej`, value: '[Triple J | abc.net.au]' },
                    { name: `${config.discord.prefix}radio wsfm`, value: '[WS FM 101.7 | wsfm.com.au]' },
                    { name: `${config.discord.prefix}radio safm`, value: '[SAFM | unknown url]' },
                    { name: `${config.discord.prefix}radio easymix`, value: '[Easy Mix | easymixdigital.com]' },
                    { name: `${config.discord.prefix}radio mix102`, value: '[Mix 102.3 | mix1023.com.au]' },
                    { name: `${config.discord.prefix}radio nova919`, value: '[Nova | novafm.com.au]' },
                    { name: `${config.discord.prefix}radio hitb105`, value: '[Hit B105 | unknown url]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }

            if (args == "helpnz")
            {

              try {
                let Embed = new Discord.MessageEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setAuthor(`NZ Radio List`, ``, `https://radiobot.live/commands.html#/NZ`)
                .addFields(
                    { name: `${config.discord.prefix}radio thebreeze`, value: '[The Breeze | thebreeze.co.nz]' },
                    { name: `${config.discord.prefix}radio maifm`, value: '[Mai FM | maifm.co.nz]' },
                    { name: `${config.discord.prefix}radio theedge`, value: '[The Edge | theedge.co.nz]' },
                    { name: `${config.discord.prefix}radio coastfm`, value: '[The Coast | thecoast.net.nz]' },
                    { name: `${config.discord.prefix}radio lifefm`, value: '[Life FM | lifefm.co.nz]' },
                    { name: `${config.discord.prefix}radio zfm1`, value: '[ZFM | zmonline.com]' },
                    { name: `${config.discord.prefix}radio zfm2`, value: '[ZFM | zmonline.com]' },
                    { name: `${config.discord.prefix}radio thehits`, value: '[The Hits | thehits.co.nz]' },
                    { name: `${config.discord.prefix}radio magicmusic`, value: '[Magic Music | magic.co.nz]' },
                    { name: `${config.discord.prefix}radio morefm`, value: '[More FM Canterbury | morefm.co.nz]' },
                    { name: `${config.discord.prefix}radio therock`, value: '[The Rock | therock.net.nz]' },
                    { name: `${config.discord.prefix}radio thesound`, value: '[The Sound | thesound.co.nz]' },
                    { name: `${config.discord.prefix}radio dovefm`, value: '[Dove FM | unknown url]' },
                )
                .setTimestamp()
                .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
                message.channel.send(Embed);
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
              }
            }

          if (args == "kiis1011"){
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  kiis1011Player(VoiceConnection)
                });
                snekfetch.get(kiis1011api).then(r => {
                  message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play kiis1011 in ${message.guild.name}`)
            } else {
                message.reply("You're not in a voice channel!");
            }

            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }




          if (args == "triplej"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  triplejPlayer(VoiceConnection)
                });
                snekfetch.get(triplejapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play tripleJ ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }



          if (args == "zfm1"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  zfm1Player(VoiceConnection)
                });   
                message.channel.send(`Now Trying to Play Radio Station : ZFM`);
                console.log(`Starting to play zfm1 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "zfm2"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  zfm2Player(VoiceConnection)
                });   
                message.channel.send(`Now Trying to Play Radio Station : ZFM`);
                console.log(`Starting to play zfm2 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "nova919"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  nova919Player(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play nova919 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "thebreeze") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  thebreezePlayer(VoiceConnection)
                });   
                snekfetch.get(thebreezeapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play thebreeze ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "maifm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  maifmPlayer(VoiceConnection)
                });    
                snekfetch.get(maifmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play maifm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "hits94") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  hits94Player(VoiceConnection)
                });  
                snekfetch.get(hits94api).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play hits94 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }

          }

          if (args == "theedge") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  theedgePlayer(VoiceConnection)
                }); 
                snekfetch.get(theedgeapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play theedge ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "wsfm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  wsfmPlayer(VoiceConnection)
                }); 
                snekfetch.get(wsfmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play wsfm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "coastfm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  coastfmPlayer(VoiceConnection)
                }); 
                snekfetch.get(coastfmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play coastfm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "lifefm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  lifefmPlayer(VoiceConnection)
                }); 
                snekfetch.get(lifefmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play lifefm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "thehits") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  thehitsPlayer(VoiceConnection)
                }); 
                snekfetch.get(thehitsapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play thehits ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "magicmusic") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  magicmusicPlayer(VoiceConnection)
                }); 
                snekfetch.get(magicmusicapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play magicmusic ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "morefm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  morefmPlayer(VoiceConnection)
                }); 
                snekfetch.get(morefmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play morefm ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "therock") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  therockPlayer(VoiceConnection)
                }); 
                snekfetch.get(therockapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play therock ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "thesound") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  thesoundPlayer(VoiceConnection)
                }); 
                snekfetch.get(thesoundapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play thesound ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "safm") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  safmPlayer(VoiceConnection)
                }); 
                snekfetch.get(safmapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play safm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "easymix") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  easymixPlayer(VoiceConnection)
                }); 
                snekfetch.get(easymixapi).then(r => {
                    message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
                });
                console.log(`Starting to play easymix ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "mix102") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  mix102Player(VoiceConnection)
                }); 
                snekfetch.get(mix102api).then(r => {
                  message.channel.send(`Now Trying to Play : ${r.body.title || "mix102"} By : ${r.body.artist || "Data Not available"}`);
                });
                console.log(`Starting to play mix102 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "forth1") {
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  forth1Player(VoiceConnection)
                }); 
                message.channel.send(`Now Trying to Play : Forth 1 FM 97.3`);
                console.log(`Starting to play forth1 ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          

          if (args == "heartuk") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  heartukPlayer(VoiceConnection)
                }); 
                message.channel.send(`Now Trying to Play : Heart Edinburgh`);
                console.log(`Starting to play heartuk ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "bbc1") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  bbc1Player(VoiceConnection)
                }); 
                snekfetch.get(bbc1api).then(r => {
                  message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
              });
                console.log(`Starting to play bbc1 ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "maximafm") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  maximafmPlayer(VoiceConnection)
                }); 
                message.channel.send(`Now Trying to Play : Maxima FM Madrid`);
                console.log(`Starting to play maximafm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          

          if (args == "bbc2") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  bbc2Player(VoiceConnection)
                }); 
                snekfetch.get(bbc2api).then(r => {
                  message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
              });
                console.log(`Starting to play bbc2 ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "ghrs") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  ghrsPlayer(VoiceConnection)
                }); 
                snekfetch.get(ghrsapi).then(r => {
                  message.channel.send(`Now Trying to Play Song : ${r.body.Header.Subtitle || "Unknown Error"}\nNow Trying to Play Radio Station : ${r.body.Header.Title || "Unknown Error"}`);
              });
                console.log(`Starting to play ghrs ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          if (args == "hitz.fm") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  hitz_FMPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play Hitz.FM ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "erafm") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                    VoiceConnection.voice.setSelfDeaf(true);
                    ERA_FMPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play Hitz.FM ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "uaekadak") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                    VoiceConnection.voice.setSelfDeaf(true);
                    uaekadakPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play uaekadak ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }


          if (args == "dovefm") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                    VoiceConnection.voice.setSelfDeaf(true);
                    dovefmPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play dovefm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "deejayit") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  deejayitPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play deejayit ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          
          if (args == "rtlit") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  rtlitPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play rtlit ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "virginradio") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  virginradioPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play virginradio ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "rmfon") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  rmfonPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play rmfon ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "eska") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  eskaPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play eska ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "planetafm") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  planetafmPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play planetafm ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "nporadio2") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  nporadio2Player(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play nporadio2 ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          
          if (args == "hitb105") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  hitb105Player(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play hitb105 ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          
          if (args == "thefan") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  thefanPlayer(VoiceConnection)
                }); 
                message.channel.send(`Trying to play music!`);
                console.log(`Starting to play thefan ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          else if (args == "stop") {
            if (message.member.voice.channel) {
              message.guild.me.voice.channel.leave();
              message.channel.send("Leaving VC!")
              console.log(`Stopped playing music in ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
          }
        } 
        catch(error)
        {
            console.error('Error:', error);
        }
    }
}

const kiis1011api = "https://feed.tunein.com/profiles/s8880/nowPlaying";
const triplejapi = "https://feed.tunein.com/profiles/s25508/nowPlaying";
const thebreezeapi = "https://feed.tunein.com/profiles/s109680/nowPlaying";
const maifmapi = "https://feed.tunein.com/profiles/s18593/nowPlaying";
const hits94api = "https://feed.tunein.com/profiles/s142771/nowPlaying";
const theedgeapi = "https://feed.tunein.com/profiles/s128419/nowPlaying";
const wsfmapi = "https://feed.tunein.com/profiles/s128419/nowPlaying";
const coastfmapi = "https://feed.tunein.com/profiles/s87185/nowPlaying";
const lifefmapi = "https://feed.tunein.com/profiles/s7983/nowPlaying";
const thehitsapi = "https://feed.tunein.com/profiles/s87086/nowPlaying";
const magicmusicapi = "https://feed.tunein.com/profiles/s246103/nowPlaying";
const morefmapi = "https://feed.tunein.com/profiles/s87235/nowPlaying";
const therockapi = "https://feed.tunein.com/profiles/s99900/nowPlaying";
const thesoundapi = "https://feed.tunein.com/profiles/s128599/nowPlaying";
const safmapi = "https://feed.tunein.com/profiles/s7026/nowPlaying";
const easymixapi = "https://feed.tunein.com/profiles/s256531/nowPlaying";
const mix102api = "https://nz.api.iheart.com/api/v3/live-meta/stream/6184/currentTrackMeta";
const bbc1api = "https://feed.tunein.com/profiles/s24939/nowPlaying";
const bbc2api = "https://feed.tunein.com/profiles/s24940/nowPlaying";
const ghrsapi = "https://feed.tunein.com/profiles/s45543/nowPlaying";
  
function kiis1011Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-arn.streamguys1.com/au_001/playlist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => kiis1011Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function triplejPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://live-radio01.mediahubaustralia.com/2TJW/mp3/?listening-from-radio-garden=1635329921');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => triplejPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function zfm1Player(vc, list){
  try
    {
      const dispatcher = vc.play('http://radio.garden/api/ara/content/listen/CP4KHede/channel.mp3?1635326363366');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => zfm1Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function zfm2Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.garden/api/ara/content/listen/M8y1ggwt/channel.mp3?1635326422330');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => zfm2Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function thebreezePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/breeze_cantebury_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => thebreezePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function maifmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.garden/api/ara/content/listen/FgvMxukC/channel.mp3?1635326474738');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => maifmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function hits94Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-sa5.cdnstream1.com/b14981_128mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => hits94Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function theedgePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/edge_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => theedgePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function wsfmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-arn.streamguys1.com/au_002/playlist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => wsfmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function coastfmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-nzme.streamguys1.com/nz_011_aac');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => coastfmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function lifefmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://rhema-radio.streamguys1.com/rhema-lifefm.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => lifefmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function thehitsPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-nzme.streamguys1.com/nz_007_aac');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => thehitsPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function magicmusicPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/magic_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => magicmusicPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function morefmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/more_chc_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => morefmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function therockPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/rock_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => therockPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function thesoundPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://tunein-icecast.mediaworks.nz/sound_128kbps');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => thesoundPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function safmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ic5ti.scahw.com.au/5sef_128');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => safmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function easymixPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://stream.lava.net.au/au_tas_net_easymix');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => easymixPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function mix102Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://ais-arn.streamguys1.com/au_003/playlist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => mix102Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function nova919Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://21423.live.streamtheworld.com/NOVA_969_AAC320.aac');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => nova919Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }


function forth1Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://stream-al.planetradio.co.uk/forth1.aac');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => forth1Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function heartukPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://media-ssl.musicradio.com/HeartEdinburgh');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => heartukPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function bbc1Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => bbc1Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function maximafmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://178.32.146.184:2088/stream');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => maximafmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }


function bbc2Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => bbc2Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function ghrsPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://stream-mz.planetradio.co.uk/net2somerset.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => ghrsPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function hitz_FMPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.garden/api/ara/content/listen/pSSO9SPz/channel.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => hitz_FMPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function ERA_FMPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.garden/api/ara/content/listen/JP4lacfu/channel.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => ERA_FMPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }


function uaekadakPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://admdn7ta.cdn.mgmlcdn.com/mirchirdo/mirchirdo.stream_aac/chunklist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => uaekadakPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function dovefmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.garden/api/ara/content/listen/X77Pz9Rz/channel.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => dovefmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function deejayitPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/index_96_a-p.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => deejayitPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function rtlitPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://streamcdne1-dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_audio.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => rtlitPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }

function virginradioPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://icecast.unitedradio.it/Virgin.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => virginradioPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function rmfonPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://rs102-krk-cyfronet.rmfstream.pl/RMFFM48');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => rmfonPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function eskaPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://radio.stream.smcdn.pl/icradio-p/2380-1.aac/playlist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => eskaPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function planetafmPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://pa02.cdn.eurozet.pl/pla-net.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => planetafmPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function nporadio2Player(vc, list){
  try
    {
      const dispatcher = vc.play('http://stream.deejays.nl/merweradio.mp3.m3u');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => nporadio2Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
  function hitb105Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://wz4web.scahw.com.au/live/4bbb_128.stream/playlist.m3u8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => hitb105Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function thefanPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://oom-radiohio.streamguys1.com/cols/wbnsfm.mp3');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => thefanPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}
  