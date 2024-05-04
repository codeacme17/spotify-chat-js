import { agentExecutor } from "./src/agent";
import "dotenv/config";

const res = await agentExecutor.invoke({
  input: "请通过 'Don't save her, she don't wanna be saved' 这段歌词，为我找到一首歌曲",
})

console.log("res", res);

// console.log(await findSongByLyrics("Don't save her, she don't wanna be saved")); 


