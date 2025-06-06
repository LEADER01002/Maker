const { Events, Interaction, EmbedBuilder } = require("discord.js");
const { Database } = require("st.db");


module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isButton()) {
      if (interaction.customId == "select_how") {
        // التحقق من وجود خيارات الأمر والخيار "user"



        // إنشاء EmbedBuilder
        const embedBuilder = new EmbedBuilder()
          .setColor("#f6f6f6")
          .setTitle(`معلومات مهمة حول صنع بوتات 🌟 ${interaction.guild.name}.`)
     .setDescription(`
🤖 **اساسيات :**
- لا تنسى ان تفعل جميع خيرات بوت من كتابة وارسال وطباعة قبل وضع توكن.
https://cdn.discordapp.com/attachments/1267508092568862790/1268241779426201690/Capture.JPG?ex=66abb5b3&is=66aa6433&hm=effa628a001202c0fb077b705d8f6ecbb1c7cc12d3df6fc06a1593dcf36a19c2&


📜 **شروط الشراء والتشغيل :**
- عند شراء وتشغيل البوت، لا يمكن استرداد قيمته.
- يجب تجديد الاشتراك قبل انتهاء صلاحيته، وبعد انتهاء الاشتراك، يتعين شراء بوت جديد.


🔒 **الخصوصية والأمان :**
- جميع بيانات البوتات محفوظة في سيرفرات Bleto معلوماتك خاصة وآمنة ولن يتم مشاركتها وفقًا لسياسة الخصوصية الخاصة بالسيرفر.

🌐 **جودة الخدمة :**
- نلتزم بتقديم أعلى جودة ممكنة، ونقوم بتحسين سرعة استجابة البوت بانتظام لتوفير تجربة خدمة محسّنة لعملائنا.

نحن هنا لتلبية احتياجاتك وضمان تجربة استخدام رائعة! 🚀
`);

        // إرسال الرد بشكل جذاب للمتفاعل فقط
        interaction.reply({ embeds: [embedBuilder], ephemeral: true });
      }
    }
  },
};
