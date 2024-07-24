const Discord = require("discord.js");
const messageUser = require("../../../../src/schemas/messageUser");
const voiceUser = require("../../../../src/schemas/voiceUser");
const voiceUserParent = require("../../../../src/schemas/voiceUserParent");
const inviterSchema = require("../../../../src/schemas/inviter");
const inviteMemberSchema = require("../../../../src/schemas/inviteMember");
const nameData = require("../../../../src/schemas/names")
const allah = require("../../../../../../config.json");
const ayarlar = require("../../../../src/configs/sunucuayar.json")
const { wraithsdevSonsuz, wraithsdevStar, wraithsdev1, wraithsdev2, wraithsdev3, wraithsdev4, wraithsdev5, wraithsdev6, wraithsdev7, wraithsdev8, wraithsdev9 } = require("../../../../src/configs/emojis.json")
const moment = require("moment");
moment.locale("tr");
const client = global.bot;

module.exports = {
  conf: {
    aliases: [],
    name: "buttonpanel",
    help: "buttonpanel",
    category: "sahip",
    owner: true,
  },

  run: async (client, message, args) => {
message.channel.send({ content:`Merhaba \`${message.guild.name}\` sunucusu içerisi yapmak istediğiniz işlem veya ulaşmak istediğiniz bilgi için gerekli butonlara tıklamanız yeterli olucaktır!\n\n**1:** \`Sunucuya giriş tarihinizi öğrenin.\`\n**2:** \`Üstünüzde bulunan rollerin listesini alın.\`\n**3:** \`Hesabınızın açılış tarihini öğrenin.\`\n\n**4:** \`Davet bilgilerinizi öğrenin.\`\n**5:** \`Tekrardan sesli kayıt olun.\`\n**6:** \`Sunucunun anlık aktif listesini görüntüleyin.\`\n\n**7:** \`Sunucudaki eski isim bilgilerinizi görüntüleyin.\`\n**8:** \`Sunucudaki toplam mesaj sayınızı öğrenin.\`\n**9:** \`Sunucu ses kanallarında toplam geçirdiğiniz süreyi öğrenin.\`\n`,
"components":[{
"type":1,"components":[
  {"type":2,"style":2,"custom_id":"I","emoji":{"id": "1213637528884744263"}},
  {"type":2,"style":2,"custom_id":"II","emoji":{"id": "1213637580218957926"}},
  {"type":2,"style":2,"custom_id":"III","emoji":{"id": "1213637599629942784"}},
]}, {  "type":1,"components":[
  {"type":2,"style":2,"custom_id":"IV","emoji":{"id": "1213637620316512286"}},
  {"type":2,"style":2,"custom_id":"V","emoji":{"id": "1213637641933819984"}},
  {"type":2,"style":2,"custom_id":"VI","emoji":{"id": "1213637658153193472"}}
]}, {  "type":1,"components":[
  {"type":2,"style":2,"custom_id":"VII","emoji":{"id": "1213637686175334401"}},
  {"type":2,"style":2,"custom_id":"VIII","emoji":{"id": "1213637708258476032"}},
  {"type":2,"style":2,"custom_id":"IX","emoji":{"id": "1213637723584204820"}}
       ]}
]})
  },
};


client.on('interactionCreate', async interaction => {
const tagges = ayarlar.tag || [];

const member = interaction.user;
const inviterData = await inviterSchema.findOne({ guildID: allah.GuildID, userID: interaction.user.id });
const total = inviterData ? inviterData.total : 0;
const regular = inviterData ? inviterData.regular : 0;
const bonus = inviterData ? inviterData.bonus : 0;
const leave = inviterData ? inviterData.leave : 0;
const fake = inviterData ? inviterData.fake : 0;
const invMember = await inviteMemberSchema.find({ guildID: allah.GuildID, inviter: interaction.user.id });
const daily = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24).size : 0;
const weekly = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24 * 7).size : 0;
const tagged = invMember ? interaction.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && tagges.includes(tag => m.user.tag.includes(tag))).size : 0;

////////////////////////////////////////////////////////////////////////////////////////////

const data = await nameData.findOne({ guildID: allah.GuildID, userID: member.id });

////////////////////////////////////////////////////////////////////////////////////////////

const messageData = await messageUser.findOne({ guildID: allah.GuildID, userID: interaction.user.id });
const voiceData = await voiceUser.findOne({ guildID: allah.GuildID, userID: interaction.user.id });

  const messageWeekly = messageData ? messageData.weeklyStat : 0;
  const voiceWeekly = moment.duration(voiceData ? voiceData.weeklyStat : 0).format("H [saat], m [dakika]");
  const messageDaily = messageData ? messageData.dailyStat : 0;
  const voiceDaily = moment.duration(voiceData ? voiceData.dailyStat : 0).format("H [saat], m [dakika]");

////////////////////////////////////////////////////////////////////////////////////////////

const category = async (parentsArray) => {
  const data = await voiceUserParent.find({ guildID: allah.GuildID, userID: member.id });
  const voiceUserParentData = data.filter((x) => parentsArray.includes(x.parentID));
  let voiceStat = 0;
  for (var i = 0; i <= voiceUserParentData.length; i++) {
    voiceStat += voiceUserParentData[i] ? voiceUserParentData[i].parentData : 0;
  }
  return moment.duration(voiceStat).format("H [saat], m [dakika] s [saniye]");
};

////////////////////////////////////////////////////////////////////////////////////////////

if(interaction.customId === "I")
{
await interaction.reply({ content: `Sunucuya Katılma Tarihiniz : <t:${Math.floor(interaction.member.joinedTimestamp / 1000)}:R>`, ephemeral: true });
}

if(interaction.customId === "II")
{
await interaction.reply({ content: `Üzerinde Bulunan Rollerin Listesi ;
        
${(await interaction.guild.members.cache.get(member.id).roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? await interaction.guild.members.cache.get(member.id).roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(', ') : 'Hiç yok.')}`, ephemeral: true });
}

if(interaction.customId === "III")
{
await interaction.reply({ content: `Hesabınızın Açılış Tarihi :  <t:${Math.floor(member.createdTimestamp / 1000)}:R>`, ephemeral: true });
}

if(interaction.customId === "IV")
{
await interaction.reply({ content: `
${member.toString()}, üyesinin \`${moment(Date.now() + (1000*60*60*3)).format("LLL")}\` tarihinden  itibaren \`${interaction.guild.name}\` sunucusunda toplam invite bilgileri aşağıda belirtilmiştir.
Toplam **${regular}** davet.

${wraithsdevSonsuz} \`(${total} gerçek, ${bonus} bonus, ${leave} ayrılmış, ${fake} fake)\`
      
${wraithsdevSonsuz} \`Günlük: ${daily}, Haftalık: ${weekly}, Taglı: ${tagged}\`
`, ephemeral: true });
}

if(interaction.customId === "V")
{
await interaction.guild.members.cache.get(member.id).roles.cache.has(ayarlar.boosterRolu) ? interaction.guild.members.cache.get(member.id).roles.set([ayarlar.boosterRolu, ayarlar.unregRoles[0]]) : interaction.guild.members.cache.get(member.id).roles.set(ayarlar.unregRoles)
await interaction.reply({ content: `${member.toString()} üyesi başarıyla kayıtsıza atıldı!`, ephemeral: true });
}

if(interaction.customId === "VI")
{
await interaction.reply({ content: `
${wraithsdevSonsuz} Sesli kanallardaki üye sayısı : \`${(interaction.guild.members.cache.filter((x) => x.voice.channel).size)}\`
${wraithsdevSonsuz} Sunucudaki toplam üye sayısı : \`${(interaction.guild.memberCount)}\`
${wraithsdevSonsuz} Sunucunun oluşturulma tarihi: \`${moment(interaction.guild.createdAt).locale("tr").format("LLL")}\`
${wraithsdevSonsuz} Sunucu destek numarası : \`${(interaction.guild.id)}\`
`, ephemeral: true });
}

if(interaction.customId === "VII")
{
const ambed = new Discord.EmbedBuilder()
.setAuthor({ name: `${member.username} üyesinin isim bilgileri;`})
.setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
.setDescription(data ? data.names.splice(0, 10).map((x, i) => `\` ${i + 1} \` \` ${x.name} \` ${x.sebep ? `(${x.sebep})` : ""} ${x.rol ? `(${x.rol})` : ""} ${x.yetkili ? `(<@${x.yetkili}>)` : ""} <t:${Math.floor(x.date / 1000)}:R>`).join("\n") : "Bu kullanıcıya ait isim geçmişi bulunmuyor!")         
await interaction.reply({ embeds: [ambed], ephemeral: true });
}

if(interaction.customId === "VIII")
{
await interaction.reply({ content: `
${member.toString()}, üyesinin \`${moment(Date.now() + (1000*60*60*3)).format("LLL")}\` tarihinden  itibaren \`${interaction.guild.name}\` sunucusunda toplam mesaj bilgileri aşağıda belirtilmiştir.

${wraithsdevStar} **Mesaj İstatistiği**
${wraithsdevSonsuz} Toplam: \`${messageData ? messageData.topStat : 0}\`

${wraithsdevSonsuz} Haftalık Mesaj: \`${Number(messageWeekly).toLocaleString()} mesaj\`
${wraithsdevSonsuz} Günlük Mesaj: \`${Number(messageDaily).toLocaleString()} mesaj\`
`, ephemeral: true });
}

if(interaction.customId === "IX")
{
await interaction.reply({ content: `
${member.toString()}, üyesinin \`${moment(Date.now() + (1000*60*60*3)).format("LLL")}\` tarihinden  itibaren \`${interaction.guild.name}\` sunucusunda toplam ses bilgileri aşağıda belirtilmiştir.

${wraithsdevStar} **Sesli Sohbet İstatistiği**
${wraithsdevSonsuz} Toplam: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika] s [saniye]")}\`

${wraithsdevSonsuz} Haftalık Ses: \`${voiceWeekly}\`
${wraithsdevSonsuz} Günlük Ses: \`${voiceDaily}\`
`, ephemeral: true });
}

})