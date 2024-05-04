import { startPlayingSongByLyrics } from "./spodify";
import { DynamicTool } from "langchain/tools";

const startPlayingSongByLyricsTool = new DynamicTool({
  name: "startPlayingSongByLyrics",
  description: "Start playing a song by its lyrics",
  func: (input: string) => startPlayingSongByLyrics(input)
})

export const tools = [startPlayingSongByLyricsTool]
