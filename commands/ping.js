const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Bot'un ping değerlerini öğrenirsiniz",
  type: 1,
  options: [],

  run: async(client, interaction, db) => {

    const userDatabase = db.fetch(`premium_${interaction.user.id}`);
    if(!userDatabase) return interaction.reply({
      embeds: [
          new EmbedBuilder()
          .setColor("#ED4245")
          .setDescription("❌ **|** Başarısız, sen premium sistemine **dahil değilsin**.")
          .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
          .setTimestamp()
      ]
  });

    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`Pong! ***${client.ws.ping}ms***`) ], ephemeral: true })

  }

};
