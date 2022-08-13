const { Client, EmbedBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  name: "premium-sorgula",
  description: "Premium sistemine dahil olup olmadığınızı öğrenin.",
  type: 1,
  options: [],

  run: async(client, interaction, db) => {

    await wait(1500)
    const userDatabase = db.fetch(`premium_${interaction.user.id}`);

    if(userDatabase) {

     return interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setColor("#57F287")
            .setDescription("✅ **|** Başarılı, sen premium sistemine **dahilsin**.")
            .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
        ]
    });

    } else {

      return interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setColor("#ED4245")
            .setDescription("❌ **|** Başarısız, sen premium sistemine **dahil değilsin**.")
            .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
        ]
    });

    }

  }

};
