import { findSongByLyrics, findSongByName, skipNext } from "./spodify";
import { DynamicTool } from "langchain/tools";

const skipNextTool = new DynamicTool({
  name: "skipNext",
  description: "Skip to the next song",
  func: () => skipNext(),
  returnDirect: true
})

const findSongByNameTool = new DynamicTool({
  name: "findSongByName",
  description: "Find a song by its name, and return its URI",
  func: (input: string) => findSongByName(input),
  returnDirect: true
})

const findSongByLyricsTool = new DynamicTool({
  name: "findSongByLyrics",
  description: "Find a song by its lyrics, and return its URI",
  func: (input: string) => findSongByLyrics(input),
  returnDirect: true
})

export const tools = [findSongByLyricsTool, findSongByNameTool, skipNextTool]
