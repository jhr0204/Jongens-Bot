import {Client, Events, GatewayIntentBits} from "discord.js";
import {token} from './config.json';

const client = new Client({intents: [GatewayIntentBits.Guilds]});
