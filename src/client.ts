import {
  Collection,
  Client as DiscordClient,
  GatewayIntentBits,
} from 'discord.js';

export class Client extends DiscordClient {
  commands: Collection<string, any>;

  constructor() {
    super({
      intents: [GatewayIntentBits.Guilds],
    });

    this.commands = new Collection();
  }
}
