const { Client, EmbedBuilder } = require("discord.js");
const { OWNER } = require("../config.json")

module.exports = {
  name: "premium-kaldır",
  description: "Geliştirici kullanıcılarını premium sistemine ekler veya kaldırır.",
  type: 1,
  options: [
    {
        name: "id",
        description: "Hedef ID.",
        type: 3,
        required: true,
    }
  ],

  run: async(client, interaction, db) => {

    const user = interaction.options.getString("id");
    const userDatabase = db.fetch(`premium_${user}`);

    if(interaction.user.id !== OWNER) return interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setColor("#ED4245")
            .setDescription("❌ **|** Bu komutu kullanmak için `Geliştirici` yetkisine ihtiyacın var.")
            .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
        ]
    });

    if(userDatabase) {


        db.delete(`premium_${user}`)

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("#57F287")
                .setDescription("✅ **|** Başarılı, <@"+user+"> premium sisteminden kaldırıldı.")
                .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
                .setTimestamp()
            ]
        });


    } else {


        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription("❌ **|** Bu kullanıcı zaten premium sisteminde bulunmuyor.")
                .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
                .setTimestamp()
            ]
        });


    };


  }

};