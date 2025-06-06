const { Events, Interaction, EmbedBuilder } = require("discord.js");
const { Database } = require("st.db");


module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isButton()) {
      if (interaction.customId == "showup") {
        // التحقق من وجود خيارات الأمر والخيار "user"

       

        // إنشاء EmbedBuilder
        const embedBuilder = new EmbedBuilder()
          .setColor("#f6f6f6")
          .setTitle(`حول اب تايم 🌟 ${interaction.guild.name}.`)
     .setDescription(`

📜 **شروط الشراء والتشغيل:**
- عند شراء خدمة ، لا يمكن استرداد قيمته.
- وبعد انتهاء الاشتراك، يتعين شراء خطة جديد.

🔒 **الخصوصية والأمان:**
- جميع بيانات البوتات محفوظة في سيرفرات Bleto معلوماتك خاصة وآمنة ولن يتم مشاركتها وفقًا لسياسة الخصوصية الخاصة بالسيرفر.

🌐 **جودة الخدمة:**
- نلتزم بتقديم أعلى جودة ممكنة، ونقوم بتحسين سرعة استجابة خوادم بانتظام لتوفير تجربة خدمة محسّنة لعملائنا.

⚠️ **شروط الإغلاق:**
- لا توجد.

نحن هنا لتلبية احتياجاتك وضمان تجربة استخدام رائعة! 🚀
`);

        // إرسال الرد بشكل جذاب للمتفاعل فقط
        interaction.reply({ embeds: [embedBuilder], ephemeral: true });
      }
    }
  },
};
