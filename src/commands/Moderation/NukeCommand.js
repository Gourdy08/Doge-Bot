const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have permission to manage channels.");
   if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I do not have permission to do that.");

   let reason = args.join(" ");
   const nukeChannel = message.channel;

   if(!reason) reason = "No reason given.";
   if (!nukeChannel.deletable) return message.channel.send("This channel is not deletable.");

   await nukeChannel.clone().catch(err => console.Log(err));
   await nukeChannel.delete(reason).catch(err => console.Log(err));

  }
}