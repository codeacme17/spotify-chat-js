import { agentExecutor } from './src/agent';
import 'dotenv/config';
import { findSongByLyrics } from './src/spodify';

const res = await agentExecutor.invoke(
  {
    input:
      "please give me the uri of the song with the lyrics \"Don't save her, she don't wanna be saved",
  },
  {
    callbacks: [
      {
        handleAgentAction(action, runId) {
          console.log('\nhandleAgentAction', action, runId);
        },
        handleAgentEnd(action, runId) {
          console.log('\nhandleAgentEnd', action, runId);
        },
        handleToolEnd(output, runId) {
          console.log('\nhandleToolEnd', output, runId);
        },
        handleToolError(err, runId, parentRunId, tags) {
          console.log('\nhandleToolError', err, runId, parentRunId, tags);
        },
      },
    ],
  }
);

console.log('res', res);

// console.log(await findSongByLyrics("Don't save her, she don't wanna be saved"));
