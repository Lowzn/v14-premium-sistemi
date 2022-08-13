const { Collection, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const db = require("orio.db");
const { readdirSync } = require("fs");

module.exports = async(client, interaction) => {

  if(interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);


      }


    });



  }

};
