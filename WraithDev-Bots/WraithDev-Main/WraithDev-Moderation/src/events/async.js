const {PermissionFlagsBits} = require("discord.js");
const conf = require("../../../src/configs/sunucuayar.json");
const { wraithsdevTik } = require("../../../src/configs/emojis.json");
const filtre = require("./kufurler");
const spamMap = new Map();
const logChannelName = "spam_log";

module.exports = async (message) => {
	if (message.author.bot) return;
    if (!message.guild || !message.member) return;
    if (message.content === "sa") {
        message.reply({content: "as"})
    }
	if (message.content === "SA") {
        message.reply({content: "AS"})
    }
    if (message.content === "Sa") {
        message.reply({content: "As"})
    }
    if (message.content === "selam") {
        message.reply({content: "Selam"})
    }
    if (message.content === "Selam") {
        message.reply({content: "Selam"})
    }
    if (message.content === "Selamun Aleyküm") {
        message.reply({content: "Aleyküm Selam"})
    }
    if (message.content === "selamun aleyküm") {
        message.reply({content: "Aleyküm Selam"})
    }
    if (message.content === "Selamun aleyküm") {
        message.reply({content: "Aleyküm Selam"})
    }
	if (message.content === "<@1016751053368201256>") {
		message.reply({content: "Şşşş wraithsdev ı rahatsız etme bot geliştiriyor! "}) 
	}
	
    const messageWords = message.content.toLowerCase().split(/\s+/);
    const containsCurses = filtre.Curses.some(curse => messageWords.includes(curse.toLowerCase()));

    if(containsCurses) {
			if (message.member.permissions.has(PermissionFlagsBits.Administrator) || message.member.permissions.has(PermissionFlagsBits.BanMembers)) return;
            message.channel.send(`${message.author}, küfür etme sikerim belanı.`).then(sentMsg => {
                setTimeout(() => sentMsg.delete().catch(console.error), 10000);
            });
        message.delete();
        return;
	}

    if(filtre.Ads.some(ad => message.content.includes(ad))) {
		if (message.member.permissions.has(PermissionFlagsBits.Administrator) || message.member.permissions.has(PermissionFlagsBits.BanMembers)) return;
        try {
            await message.member.timeout(3600000, "Reklam yapmak.");
            message.channel.send(`${message.author}, Sen kim köpek reklam atmak lan it. Reklamdan dolayı 1 saat susturuldun.`);
        } catch (error) {
            console.error('Timeout uygulanırken bir hata oluştu:', error);
        }
        message.delete();
        return;
    }

    const currentTime = Date.now();
    const timeLimit = 5000; 
    const maxMessages = 5; 
    const timeoutDuration = 10 * 60 * 1000; 

    if (!spamMap.has(message.author.id)) {
        spamMap.set(message.author.id, { lastMessageTime: currentTime, messageCount: 1, messages: [message] });
    } else {
		if (message.member.permissions.has(PermissionFlagsBits.Administrator) || message.member.permissions.has(PermissionFlagsBits.BanMembers)) return;
        const userData = spamMap.get(message.author.id);

        if (currentTime - userData.lastMessageTime < timeLimit) {
            userData.messages.push(message);
            userData.messageCount++;
            if (userData.messageCount >= maxMessages) {
                try {
                    await message.member.timeout(timeoutDuration, "Spam yapmak.");
                    message.channel.send(`${message.author}, spam yapma yeter yeter.Spam yaptığın için 10 dakika susturuldun.`);
                    userData.messages.forEach(msg => msg.delete().catch(console.error));
                    const logChannel = message.guild.channels.cache.find(channel => channel.name === logChannelName && channel.type === Discord.ChannelType.GuildText);
                    if (logChannel) {
                        logChannel.send(`${message.author}, spam yaptığı için 10 dakika susturuldu.`);
                    } else {
                        console.log(`${logChannelName} isimli kanal bulunamadı.`);
                    }
                } catch (error) {
                    console.error('Timeout uygulanırken bir hata oluştu:', error);
                }
                spamMap.set(message.author.id, { lastMessageTime: currentTime, messageCount: 0, messages: [] });
                return;
            }
        } else {
            userData.messageCount = 1;
            userData.lastMessageTime = currentTime;
            userData.messages = [message];
        }

        spamMap.set(message.author.id, userData);
    }
};

module.exports.conf = {
    name: "messageCreate"
};