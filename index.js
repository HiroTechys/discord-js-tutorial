const Discord = require('discord.js');

const client = new Discord.client();

const config = {
  prefix: "!",
  token: "ODIyODkzNzcxNjIzNjI4ODIw.YFY5iw.vapEmvjh-0-rSZ28hLG7hfw20Hs"
}

client.on("ready", () => {
  console.log("Bot has started!")
})

client.on("message", (message) => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).split(" ");
  const command = args.shift();

  switch(command){
    case "ping",
    message.channel.send(`My ping is: ${client.ws.ping}`)
    break;
    case "say",
    message.channel.send(args.join(" "));
    break;
    default;
    message.channel.send("UNKNOWN COMMAND");
    break;
  }
})

client.login(config.token);
