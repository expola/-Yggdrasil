/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "pause",
  description: "Para de reproduzir a música que está sendo reproduzida.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Nenhuma música tocando!!', ephemeral: true });
      }

      const success = queue.pause();

      const embed = new EmbedBuilder()
        .setColor('#7645fe') 
        .setAuthor({
          name: 'Música pausada',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157296313013117049/8061-purple-pause-icon.png?ex=651817ae&is=6516c62e&hm=4596c9fab9d8b66de8b5215b2750572ced352eed67440a1134550b846b5693b9&',
          url: 'https'
        })
        .setDescription(success ? '**A música foi pausada por um momento!!**' : '❌ Erro de comando: não é possível pausar a música')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
