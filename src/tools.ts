import { findUriByLyrics, findSongByName, skipNext } from './spodify';
import { DynamicStructuredTool, DynamicTool } from 'langchain/tools';
import { z } from 'zod';

const skipNextTool = new DynamicTool({
  name: 'skipNext',
  description: 'Skip to the next song',
  func: () => skipNext(),
  returnDirect: true,
});

const findUriByNameTool = new DynamicTool({
  name: 'findSongByName',
  description: 'Use a song name to find a song uri',
  func: (input: string) => findSongByName(input),
  returnDirect: true,
});

const findUriByLyricsTool = new DynamicStructuredTool({
  name: 'findUriByLyrics',
  description: 'Use lyrics to find a song uri',
  schema: z.object({
    lyrics: z.string().describe("lyrics in the user's request"),
  }),
  returnDirect: true,
  func: ({ lyrics }) => findUriByLyrics(lyrics),
});

export const tools = [findUriByLyricsTool, findUriByNameTool];
