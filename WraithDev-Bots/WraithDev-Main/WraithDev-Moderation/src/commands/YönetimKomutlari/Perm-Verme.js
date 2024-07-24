const { PermissionsBitField, ComponentType, EmbedBuilder, Client, Message, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const { wraithsdevRed, wraithsdevTik } = require("../../../../src/configs/emojis.json")
let ayar = require("../../../../src/configs/sunucuayar.json"); 
const moment = require("moment");
require("moment-duration-format");
const client = global.bot;

module.exports = {
    conf: {
      aliases: ["perm"],
      name: "perm",
      help: "perm <@wraithsdev/ID>",
      category: "yönetim",
    },
  
    run: async (client, message, args, embed) => {
      if(!ayar.rolverici.some(oku => message.member.roles.cache.has(oku)) && !message.member.permissions.has(PermissionsBitField.Flags.Administrator)) 
      { 
      message.react(wraithsdevRed)
      message.reply({ content:`Yetkin bulunmamakta dostum.`}).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
      return }
      
let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!uye) return message.reply({ content:` • Örnek; !perm @wraithsdev/ID`});
if(message.author.id === uye.id) return message.reply({content: `Kendine Rol Veremezsin dostum!`, ephemeral: true })

const perm = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('perm')
        .setPlaceholder('Eklemek istediğiniz perm için tıklayınız')
        .addOptions([
            {
                label: 'Vip',
                value: 'vip',
                emoji: '1199474104315695145'
            },
            {
                label: 'Müzisyen',
                value: 'müzisyen',
                emoji: '🎵'
            },						
            {
                label: 'Tasarımcı',
                value: 'tasarımcı',
                emoji: '1213075673661317150'
            },
            {
                label: 'Streamer',
                value: 'streamer',
                emoji: '1213075797766701087'
            },
            {
                label: 'Terapist',
                value: 'terapi',
                emoji: '⛑️'
            },
            {
                label: 'Sorun Çözücü',
                value: 'sorun',
                emoji: '1213076224633471036'
            },
        ]),
);

const msg = await message.reply({ content : `${uye} kullanıcısına perm eklemek için aşağıdaki menüyü kullanınız`, components: [perm] });

const filter = i => i.user.id == message.author.id 
const collector = msg.createMessageComponentCollector({ filter, componentType: ComponentType.StringSelect, max: 1, time: 20000 });
collector.on("collect", async (interaction) => {

     if (interaction.values[0] === "vip") {
        uye.roles.cache.has(ayar.vipRole) ? uye.roles.remove(ayar.vipRole) : uye.roles.add(ayar.vipRole);
        if(!uye.roles.cache.has(ayar.vipRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Vip** adlı rol verildi.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Vip** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Vip** adlı rol geri alındı.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Vip** rolü geri alındı.`, components: [] });
        };
     }

     if (interaction.values[0] === "müzisyen") {
        uye.roles.cache.has(ayar.müzisyenRole) ? uye.roles.remove(ayar.müzisyenRole) : uye.roles.add(ayar.müzisyenRole);
        if(!uye.roles.cache.has(ayar.müzisyenRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Müzisyen** adlı rol verildi.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Müzisyen** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Müzisyen** adlı rol geri alındı.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Müzisyen** rolü geri alındı.`, components: [] });
        };
     }

    if (interaction.values[0] === "tasarımcı") {
        uye.roles.cache.has(ayar.tasarımcıRole) ? uye.roles.remove(ayar.tasarımcıRole) : uye.roles.add(ayar.tasarımcıRole);
        if(!uye.roles.cache.has(ayar.tasarımcıRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Tasarımcı** adlı rol verildi.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Tasarımcı** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Tasarımcı** adlı rol geri alındı.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Tasarımcı** rolü geri alındı.`, components: [] });
        };
     }

    if (interaction.values[0] === "streamer") {
        uye.roles.cache.has(ayar.streamerRole) ? uye.roles.remove(ayar.streamerRole) : uye.roles.add(ayar.streamerRole);
        if(!uye.roles.cache.has(ayar.streamerRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Streamer** adlı rol verildi.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Streamer** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Streamer** adlı rol geri alındı.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Streamer** rolü geri alındı.`, components: [] });
        };
     }

     if (interaction.values[0] === "terapi") {
      uye.roles.cache.has(ayar.terapistRole) ? uye.roles.remove(ayar.terapistRole) : uye.roles.add(ayar.terapistRole);
      if(!uye.roles.cache.has(ayar.terapistRole)) {
        client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Terapist** adlı rol verildi.`)]})
        msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Terapist** rolü verildi.`, components: [] });
      } else {
        client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Terapist** adlı rol geri alındı.`)]})
        msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Terapist** rolü geri alındı.`, components: [] });
      };
   }

    if (interaction.values[0] === "sorun") {
        uye.roles.cache.has(ayar.sorunçözücüRole) ? uye.roles.remove(ayar.sorunçözücüRole) : uye.roles.add(ayar.sorunçözücüRole);
        if(!uye.roles.cache.has(ayar.sorunçözücüRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Sorun Çözücü** adlı rol verildi.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişiye **Sorun Çözücü** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Sorun Çözücü** adlı rol geri alındı.`)]})
          msg.edit({ content:`${wraithsdevTik} Başarıyla ${uye}, isimli kişinin **Sorun Çözücü** rolü geri alındı.`, components: [] });
        };
     }
    })

}
}