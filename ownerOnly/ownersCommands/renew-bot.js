const { SlashCommandBuilder, EmbedBuilder , PermissionsBitField, ActionRowBuilder,ButtonBuilder,MessageComponentCollector,ButtonStyle, Embed } = require("discord.js");const { Database } = require("st.db")
const db = new Database("/database/settings")
const tokens = new Database("/tokens/tokens")
const { clientId,owner} = require('../../config.json');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('renew-bot')
    .setDescription('تجديد اشتراك')
    .addStringOption(Option => Option
        .setName(`type`)
        .setDescription(`نوع البوت`)
        .setChoices(
            {
                name:`Broadcast` , value:`Bc`
            },
            {
                name:`Tax` , value:`tax`
            },
            {
                name:`Scammers` , value:`scam`
            },
            {
                name:`Seller` , value:`seller`
            },
            {
                name:`Order` , value:`order`
            },
            {
                name:`Logs` , value:`logs`
            },
           {
                name:`Azkar` , value:`azkar`
            },
            {
                name:`Tickets` , value:`ticket`
            },
            {
                name:`Shop` , value:`shop`
            },
            {
                name:`Suggestions` , value:`suggestions`
            },
            {
                name:`Feedback` , value:`feedback`
            },
            {
                name:`Probot Premium` , value:`probot`
            },
            {
                name:`Blacklist` , value:`blacklist`
            },
            {
                name:`system` , value:`system`
            },
            {
                name:`Protect` , value:`protect`
            },
            {
                name:`Blacklist` , value:`blacklist`
            },           
            {
                name:`Nadeko` , value:`nadeko`
            },
            {
                name:`NormalBroadcast` , value:`Broadcast2`
            },
            {
                name:`Credit` , value:`credit`
            },
            {
                name:`Apply` , value:`apply`
            },
            {
                name:`Autoline` , value:`autoline`
            },
            {
                name:`all` , value:`all`
            }
        )
        .setRequired(true))
    .addStringOption(Option => Option
        .setName(`clientid`)
        .setDescription(`ايدي البوت`)
        .setRequired(true))
        .addIntegerOption(Option => Option
            .setName(`days`)
            .setDescription(`الايام`)
            .setRequired(true))
    ,
    async execute(interaction) {
       if(!owner.includes(interaction.user.id)) return;
       const type = interaction.options.getString(`type`)
       const clientid = interaction.options.getString(`clientid`)
       const days = interaction.options.getInteger(`days`)
       const subsearch = await tokens.get(`${type}`)
       const serversearch = subsearch.find(su => su.clientId == clientid)
       if(!serversearch) {
        return interaction.reply({content:`**لم يتم العثور على اشتراك بهذا الايدي**`})
       }
       const daysByHours = Math.floor(parseInt(days) * 24)
       const daysByMins = Math.floor(parseInt(daysByHours) * 60)
       const daysBySecs = Math.floor(parseInt(daysByMins) * 60)
       let {timeleft} = serversearch;
       timeleft = timeleft + daysBySecs
       serversearch.timeleft = timeleft
       await tokens.set(`${type}` , subsearch)
       const doneembed = new EmbedBuilder()
       .setFooter({text:interaction.user.username , iconURL:interaction.user.displayAvatarURL({dynamic:true})})
        .setAuthor({name:interaction.guild.name , iconURL:interaction.guild.iconURL({dynamic:true})})
        .setTimestamp(Date.now())
        .setColor('#000000')
        .setTitle(`**تم تجديد الاشتراك واضافة الوقت بنجاح**`)
        .setDescription(`**عدد الايام المتبقية الأن : \`${Math.floor((timeleft / 60) / (60) / (24))}\`**`)
       return interaction.reply({embeds:[doneembed]})
    }
}