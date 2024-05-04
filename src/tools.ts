import { startPlayingSongByLyrics, findSongByName, skipNext } from "./spodify";
import { DynamicTool } from "langchain/tools";

const skipNextTool = new DynamicTool({
  name: "skipNext",
  description: "Skip to the next song",
  func: () => skipNext()
})

const findSongByNameTool = new DynamicTool({
  name: "findSongByName",
  description: "Find a song by its name, and return its URI",
  func: (input: string) => findSongByName(input)
})

const startPlayingSongByLyricsTool = new DynamicTool({
  name: "startPlayingSongByLyrics",
  description: "Start playing a song by its lyrics",
  func: (input: string) => startPlayingSongByLyrics(input)
})

export const tools = [startPlayingSongByLyricsTool, findSongByNameTool, skipNextTool]
