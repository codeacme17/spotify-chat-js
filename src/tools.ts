import { findSongByLyrics, findSongByName, skipNext } from './spodify';
import { DynamicStructuredTool, DynamicTool } from 'langchain/tools';
import { z } from 'zod';

const skipNextTool = new DynamicTool({
  name: 'skipNext',
  description: 'Skip to the next song',
  func: () => skipNext(),
  returnDirect: true,
});

const findSongByNameTool = new DynamicTool({
  name: 'findSongByName',
  description: 'Find a song by its name, and return its URI',
  func: (input: string) => findSongByName(input),
  returnDirect: true,
});

const findSongByLyricsTool = new DynamicStructuredTool({
  name: 'findSongByLyrics',
  description: 'use lyrics to find a song uri',
  schema: z.object({
    lyrics: z.string().describe("lyrics in the user's request"),
  }),
  returnDirect: true,
  func: ({ lyrics }) => findSongByLyrics(lyrics),
});

export const tools = [findSongByLyricsTool];
