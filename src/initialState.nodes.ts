import { INodes } from './types';

export const nodes: INodes = {
  n1: {
    id: 'n1',
    nodeType: 'llm',
    label: 'Prompt template',
    promptTemplate: {
      content: 'Generate a conversation between 3 students (sam, alex and rachel) about ${prompt}',
    },
    model: {
      modelType: 'openAI',
      modelName: 'text-davinci-003',
      temperature: 0.7,
    },
    position: { x: 250, y: 0 },
    connectors: ['n2', 'n3'],
    duration: 32,
    price: 10,
    tokensCount: 150,
  },
  n2: {
    id: 'n2',
    nodeType: 'llm',
    label: 'Transcript',
    promptTemplate: {
      content: 'can you turn the following paragraph into phonetics?\n${input}',
    },
    model: {
      modelType: 'openAI',
      modelName: 'text-davinci-003',
      temperature: 0.7,
      maxTokens: 150,
    },
    position: { x: 150, y: 150 },
    connectors: ['n4'],
  },
  n3: {
    id: 'n3',
    nodeType: 'api',
    label: 'Voice',
    api: {
      apiType: 'elevenLabs',
      formatInput: 'conversation',
    },
    position: { x: 350, y: 150 },
    connectors: ['n4'],
    tokensCount: 150,
  },
  n4: {
    id: 'n4',
    label: 'Play animation',
    nodeType: 'api',
    position: { x: 250, y: 300 },
    connectors: [],
  },
};
