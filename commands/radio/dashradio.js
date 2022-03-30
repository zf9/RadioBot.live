const Discord = require('discord.js');
const config = require('../../config/bot');
const snekfetch = require("snekfetch")

module.exports = {
    name: 'dashradio',
    aliases: ['dr'],
    category: 'radio',
    utilisation: '{prefix}dashradio [Radio Station Name]',
    async execute(client, message, args) {
        if (!message.guild) return;
        if(!args[0]) return message.channel.send(`Please Provide A Valid Command. For More Info Do : ${config.discord.prefix}help`);

        try 
        {
          if (args == "popx"){
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  popxPlayer(VoiceConnection)
                });
                message.channel.send("Starting Dash Pop X")
                console.log(`Starting to play popx in ${message.guild.name}`)
            } else {
                message.reply("You're not in a voice channel!");
            }

            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "hitsx"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  hitsxPlayer(VoiceConnection)
                });
                message.channel.send("Starting Dash Hits X")
                console.log(`Starting to play hitsx ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }



          if (args == "dashx"){
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  dashxPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Dash X")
                console.log(`Starting to play dashx ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "fusionpop"){
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  fusionpopPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Fusion - Blending Pop, Latin, Country")
                console.log(`Starting to play fusionpop ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "popfamily"){
            try {
              
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  popfamilyPlayer(VoiceConnection)
                }); 
                message.channel.send("Starting Pop Family - Hits for the Family to Enjoy")
                console.log(`Starting to play popfamily ${message.guild.name}`)
    
            } else {
              message.reply("You're not in a voice channel!");
            }
              
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "discoverpop") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  discoverpopPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Discover - New Artist Discovery")
                console.log(`Starting to play discoverpop ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "lovesongs") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  lovesongsPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Love Songs")
                console.log(`Starting to play longsongs ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "hftr") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  happyfuntimeranbowPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Happy Fun Time Rainbow Radio - Happy Hits")
                console.log(`Starting to play longsongs ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "soundcloud") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  soundcloudPlayer(VoiceConnection)
                });   
                message.channel.send("Starting SoundCloud Radio - New Music Discovery")
                console.log(`Starting to play soundcloud ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "freefire") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  freefirePlayer(VoiceConnection)
                });   
                message.channel.send("Starting Free Fire")
                console.log(`Starting to play freefire ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "hiphopx") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  hiphopxPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Dash Hip-Hop X")
                console.log(`Starting to play hiphopx ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "thecity") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  thecityPlayer(VoiceConnection)
                });   
                message.channel.send("Starting The City - Today's Hottest Hip-Hop & R&B")
                console.log(`Starting to play thecity ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          
          if (args == "doggystyle") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  doggystylePlayer(VoiceConnection)
                });   
                message.channel.send("Starting Doggystyle - West Coast Hip-Hop")
                console.log(`Starting to play doggystyle ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "southside") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  southsidePlayer(VoiceConnection)
                });   
                message.channel.send("Starting Southside - Live from the ATL")
                console.log(`Starting to play southside ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "1580") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  d1580Player(VoiceConnection)
                });   
                message.channel.send("Starting 1580 ® - Classic Hip-Hop Hits")
                console.log(`Starting to play 1580 ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
    
          if (args == "nativerhymes") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  nativerhymesPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Native Rhymes - Classic Hip-Hop")
                console.log(`Starting to play nativerhymes ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "independentgrind") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  independentgrindPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Independent Grind ®")
                console.log(`Starting to play independentgrind ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
    
          if (args == "beatjunkie") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  beatjunkiePlayer(VoiceConnection)
                });   
                message.channel.send("Starting Beat Junkie Radio - Classic Hip-Hop")
                console.log(`Starting to play beatjunkie ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }
          
          if (args == "deliciousvinyl") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  deliciousvinylPlayer(VoiceConnection)
                });   
                message.channel.send("Starting Delicious Vinyl Radio - Classic Hip-Hop")
                console.log(`Starting to play deliciousvinyl ${message.guild.name}`)
            } else {
              message.reply("You're not in a voice channel!");
            }
            } catch(error){
              console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
          }

          if (args == "taste") {
            try {
              if (message.member.voice.channel) {
                message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.voice.setSelfDeaf(true);
                  tastePlayer(VoiceConnection)
                });   
                message.channel.send("Starting TASTE - Hip-Hop Culture")
                console.log(`Starting to play tastePlayer ${message.guild.name}`)
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

function popxPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH17');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => popxPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function hitsxPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH58');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => hitsxPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
  }
  
function dashxPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH31');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => dashxPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}
  
function fusionpopPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH88');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => fusionpopPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function discoverpopPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH46');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => discoverpopPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function lovesongsPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH67');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => lovesongsPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function happyfuntimeranbowPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH41');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => happyfuntimeranbowPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function soundcloudPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH68');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => soundcloudPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function freefirePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH74');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => freefirePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function hiphopxPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH90');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => hiphopxPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function thecityPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH2');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => thecityPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function doggystylePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH78');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => doggystylePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function southsidePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH95');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => southsidePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function d1580Player(vc, list){
  try
    {
      const dispatcher = vc.play('https://ice55.securenetsystems.net/DASH11');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => d1580Player(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function nativerhymesPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH18');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => nativerhymesPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function independentgrindPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH8');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => independentgrindPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function beatjunkiePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH51');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => beatjunkiePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function beatjunkiePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH51');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => beatjunkiePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function deliciousvinylPlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH71');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => deliciousvinylPlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}

function tastePlayer(vc, list){
  try
    {
      const dispatcher = vc.play('http://ice55.securenetsystems.net/DASH85');
      dispatcher.on('error', console.error)
      dispatcher.on('finish', () => {
        setTimeout(() => dispatcher.destroy(), 3000);
        setTimeout(() => tastePlayer(vc), 5000);
      });
    }
    catch(error)
    {
      console.error(error)
    }
}
