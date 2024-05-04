import { AzureChatOpenAI } from '@langchain/azure-openai';
import { pull } from 'langchain/hub';
import {
  AgentExecutor,
  createOpenAIFunctionsAgent,
  createOpenAIToolsAgent,
  createReactAgent,
} from 'langchain/agents';
import { tools } from './tools';
import type { ChatPromptTemplate, PromptTemplate } from 'langchain/prompts';

const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;
const AZURE_DEPLOYMENT_NAME = process.env.AZURE_DEPLOYMENT_NAME;

const llm = new AzureChatOpenAI({
  azureOpenAIEndpoint: AZURE_ENDPOINT,
  apiKey: AZURE_API_KEY,
  azureOpenAIApiDeploymentName: AZURE_DEPLOYMENT_NAME,
  temperature: 0,
});

const prompt = await pull<PromptTemplate>('hwchase17/react');

const agent = await createReactAgent({
  llm,
  tools,
  prompt,
});

export const agentExecutor = new AgentExecutor({
  agent,
  tools,
  maxIterations: 3,
  verbose: true,
});
