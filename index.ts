import "dotenv/config";

import { agentExecutor } from "./src/agent";

const res = await agentExecutor.invoke({
  input: "start play song with lyrics: 'I'm feeling good'",
})

console.log(res);
