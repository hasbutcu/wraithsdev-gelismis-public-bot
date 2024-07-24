const { Database } = require("ark.db");
const { ChannelType, PermissionsBitField, ButtonStyle, ComponentType, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const allah = require("../../../../../../config.json");

module.exports = {
  conf: {
    aliases: [],
    name: "kurulum",
    help: "kurulum",
    category: "sahip",
    owner: true,
  },

  run: async (client, message, args) => {

    if (message.guild === null) {
      return message.reply({ content: `Bu komutu sadece Sunucuda kullanabilirsin!`, ephemeral: true })
    } else if (!allah.owners.includes(message.author.id)) {
      return message.reply({ content: ":x: Bot developerı olmadığın için kurulumu yapamazsın.", ephemeral: true })
    } else {

  const row = new ActionRowBuilder()
  .addComponents(
  new ButtonBuilder()
  .setCustomId("rol")
  .setLabel("Menü Rol Kurulum")
  .setStyle(ButtonStyle.Primary),

  new ButtonBuilder()
  .setCustomId("kanal")
  .setLabel("Kanal Kurulum")
  .setStyle(ButtonStyle.Success),

  new ButtonBuilder()
  .setCustomId("emoji")
  .setLabel("Emoji Kurulum")
  .setStyle(ButtonStyle.Danger),
  );

      let msg = await message.channel.send({ content: `Lütfen **60 saniye** içerisinde hangi kurulum yapacağınızı aşağıdaki butonlara tıklayarak cevaplayınız.`, components: [row]})

      var filter = (button) => button.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter, componentType: ComponentType.Button , max: 3, time: 60000 })


      collector.on("collect", async interaction => {

        if (interaction.customId === "rol") {
          await interaction.deferUpdate();

         await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });
  
          await interaction.guild.roles.create({
            name: "🍓",
            color: "#ff0000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🍊",
            color: "#ff8b00",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🍇",
            color: "#4f00ff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🍑",
            color: "#ff00d1",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🥑",
            color: "#56ff00",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "Alone 💔",
            color: "#b0d0f7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "Couple 💍",
            color: "#e73084",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "Çekiliş Katılımcısı 🎉",
            color: "#f89292",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "Etkinlik Duyuru 🎉",
            color: "#f89292",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♏ Akrep",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♉ Boğa",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♍ Başak",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♊ İkizler",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♒ Kova",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♈ Koç",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♋ Yengeç",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♑ Oğlak",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♎ Terazi",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♌ Aslan",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♓ Balık",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "♐ Yay",
            color: "#ffffff",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 CS:GO",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 League of Legends",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 Valorant",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 Gta V",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 PUBG",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "🎮 Fortnite",
            color: "#ffa7a7",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          await interaction.guild.roles.create({
            name: "------------------------",
            color: "#000000",
            permissions: "0",
            reason: "Rol Seçim Menüsü için Lazımki kurduk sanane aq."
          });

          msg.reply({ content: `Menü için gerekli Rollerin kurulumu başarıyla tamamlanmıştır.\n**Not:** Renk rollerini booster ve taglı rollerinin üstüne taşıyınız.`, ephemeral: true })

        }

        if (interaction.customId === "kanal") {
          await interaction.deferUpdate();
 
          const parent = await interaction.guild.channels.create({ name: 'SUNUCU LOGLAR',
            type: ChannelType.GuildCategory,
            permissionOverwrites: [{
              id: interaction.guild.id,
              deny: [PermissionsBitField.Flags.ViewChannel],
            }]
          });
          await interaction.guild.channels.create({ name: 'level_bilgi', 
            type: ChannelType.GuildText,
            parent: parent.id,
            permissionOverwrites: [{
            id: interaction.guild.id,
            allow: [PermissionsBitField.Flags.ViewChannel],
            deny: [PermissionsBitField.Flags.SendMessages],
          }]
          });
          await interaction.guild.channels.create({ name: 'guard_log',
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'message_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'voice_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'stream_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'camera_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'mute_deaf_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'taglı_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'register_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'name_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'rank_log', 
            type: ChannelType.GuildText,
            parent: parent.id

          });
          await interaction.guild.channels.create({ name: 'market_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'rol_log', 
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'yetki_log',
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'komut_log',
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'boost_log',
            type: ChannelType.GuildText,
            parent: parent.id
          });
          await interaction.guild.channels.create({ name: 'bot_log',
          type: ChannelType.GuildText,
          parent: parent.id
        });
          msg.reply({ content: `Log Kanallarının kurulumu başarıyla tamamlanmıştır.`, ephemeral: true })

        }

        if (interaction.customId === "emoji") {
          await interaction.deferUpdate();

          const emojis = [
              { name: "wraithsdevStar", url: "https://cdn.discordapp.com/emojis/1213645127227146240.gif?size=80&quality=lossless" },
              { name: "wraithsdevSaat", url: "https://cdn.discordapp.com/emojis/1213646043577581608.gif?size=80&quality=lossless" },
              { name: "wraithsdevSonsuz", url: "https://cdn.discordapp.com/emojis/1213638550055292939.gif?size=80&quality=lossless" },
              { name: "wraithsdevRed", url: "https://cdn.discordapp.com/emojis/1213638200413782077.gif?size=80&quality=lossless" },
              { name: "wraithsdevTik", url: "https://cdn.discordapp.com/emojis/1213638247918346350.gif?size=80&quality=lossless" },
              { name: "wraithsdevStaff", url: "https://cdn.discordapp.com/emojis/1213639616087720016.webp?size=80&quality=lossless" },
              { name: "wraithsdevKalp", url: "https://cdn.discordapp.com/emojis/1213647502834925578.gif?size=80&quality=lossless" },
              { name: "wraithsdevOk", url: "https://cdn.discordapp.com/emojis/1213641819586568253.webp?size=80&quality=lossless" },
              { name: "wraithsdevRevu", url: "https://cdn.discordapp.com/emojis/1213638745857990767.gif?size=80&quality=lossless" },
              { name: "wraithsdevCeza", url: "https://cdn.discordapp.com/emojis/1213641601864437863.webp?size=80&quality=lossless" },
              { name: "wraithsdevJail", url: "https://cdn.discordapp.com/emojis/1213641379796877423.webp?size=80&quality=lossless" },
              { name: "wraithsdevLock", url: "https://cdn.discordapp.com/emojis/1213640681764159568.webp?size=80&quality=lossless" },
              { name: "wraithsdevd2", url: "https://cdn.discordapp.com/emojis/1213640232654733372.gif?size=80&quality=lossless" },
              { name: "wraithsdevb2", url: "https://cdn.discordapp.com/emojis/1213640154028179537.webp?size=80&quality=lossless" },
              { name: "wraithsdevd1", url: "https://cdn.discordapp.com/emojis/1213640208206266479.gif?size=80&quality=lossless" },
              { name: "wraithsdevb3", url: "https://cdn.discordapp.com/emojis/1213640177155575910.webp?size=80&quality=lossless" },
              { name: "wraithsdevd3", url: "https://cdn.discordapp.com/emojis/1213640249993994362.gif?size=80&quality=lossless" },
              { name: "wraithsdevCekilis", url: "https://cdn.discordapp.com/emojis/1213642609189322763.gif?size=80&quality=lossless" },
              { name: "wraithsdev1", url: "https://cdn.discordapp.com/emojis/1213637528884744263.gif?size=80&quality=lossless" },
              { name: "wraithsdev2", url: "https://cdn.discordapp.com/emojis/1213637580218957926.gif?size=80&quality=lossless" },
              { name: "wraithsdev3", url: "https://cdn.discordapp.com/emojis/1213637599629942784.gif?size=80&quality=lossless" },
              { name: "wraithsdev4", url: "https://cdn.discordapp.com/emojis/1213637620316512286.gif?size=80&quality=lossless" },
              { name: "wraithsdev5", url: "https://cdn.discordapp.com/emojis/1213637641933819984.gif?size=80&quality=lossless" },
              { name: "wraithsdev6", url: "https://cdn.discordapp.com/emojis/1213637658153193472.gif?size=80&quality=lossless" },
              { name: "wraithsdev7", url: "https://cdn.discordapp.com/emojis/1213637686175334401.gif?size=80&quality=lossless" },
              { name: "wraithsdev8", url: "https://cdn.discordapp.com/emojis/1213637708258476032.gif?size=80&quality=lossless" },
              { name: "wraithsdev9", url: "https://cdn.discordapp.com/emojis/1213637723584204820.gif?size=80&quality=lossless" },
              { name: "wraithsdev0", url: "https://cdn.discordapp.com/emojis/1213640894545395732.gif?size=80&quality=lossless" },
              { name: "wraithsdevTac", url: "https://cdn.discordapp.com/emojis/1215347749159964673.webp?size=80&quality=lossless"}
          ]
            const SecretEmojis = [
              { name: "secret1", url: "https://cdn.discordapp.com/emojis/1213643978902212648.webp?size=80&quality=lossless" },
              { name: "secret2", url: "https://cdn.discordapp.com/emojis/1213644006018523146.webp?size=80&quality=lossless" },
              { name: "secret3", url: "https://cdn.discordapp.com/emojis/1213644035990749194.webp?size=40&quality=lossless" },
              { name: "secret4", url: "https://cdn.discordapp.com/emojis/1213644055221637140.webp?size=40&quality=lossless" },
              { name: "secret5", url: "https://cdn.discordapp.com/emojis/1213644083176677427.webp?size=40&quality=lossless" },
              { name: "secret6", url: "https://cdn.discordapp.com/emojis/1213644108451553290.webp?size=40&quality=lossless" },
              { name: "secret7", url: "https://cdn.discordapp.com/emojis/1213644127376511016.webp?size=40&quality=lossless" },
              { name: "secret8", url: "https://cdn.discordapp.com/emojis/1213644147634868288.webp?size=40&quality=lossless" },
              { name: "secret9", url: "https://cdn.discordapp.com/emojis/1213644165192360006.webp?size=40&quality=lossless" },
              { name: "secret10", url: "https://cdn.discordapp.com/emojis/1213644192354406471.webp?size=40&quality=lossless" }
            ]
          emojis.forEach(async (x) => {
              if (message.guild.emojis.cache.find((e) => x.name === e.name)) global.emojidb.set(x.name, message.guild.emojis.cache.find((e) => x.name === e.name).toString());
              if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
              const emoji = await interaction.guild.emojis.create({ attachment: x.url, name: x.name });
              await global.emojidb.set(x.name, emoji.toString()); 
              message.channel.send({ content: `\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`, ephemeral: true })

            })

            SecretEmojis.forEach(async (x) => {
              if (message.guild.emojis.cache.find((e) => x.name === e.name)) global.emojidb.set(x.name, message.guild.emojis.cache.find((e) => x.name === e.name).toString());
              if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
              const emoji = await interaction.guild.emojis.create({ attachment: x.url, name: x.name });
              await global.emojidb.set(x.name, emoji.toString()); 
              message.channel.send({ content: `\`${x.name}\` isimli özel oda emojisi oluşturuldu! (${emoji.toString()})`, ephemeral: true })

            })
        }
  
      })

    }
  },
};