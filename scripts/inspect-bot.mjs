import { bot, channel } from 'eve/channels/chat-sdk';
import { createWebAdapter } from '@chat-adapter/web';
import { createMemoryState } from '@chat-adapter/state-memory';

console.log('Bot properties and methods:');
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(bot)));
console.log('Bot own properties:', Object.keys(bot));
