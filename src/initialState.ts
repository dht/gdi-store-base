import { barItems } from './initialState.bar';
import { messages } from './initialState.messages';
import { nodes } from './initialState.nodes';
import { IGdiStore } from './types';

export const initialState: IGdiStore = {
  appState: {
    adapter: 'no adapter',
    flavour: 'default',
    prompt: '',
    promptPlaceholder: '',
    transcriptId: '',
    lineIndex: -1,
    lineDuration: -1,
    storageUrl: '',
    isMac: true,
    cmdKey: '⌘',
    is24Hours: false,
    showLog: false,
    screenWidth: 1920,
    screenHeight: 1080,
    imageUrl: '',
    isDataReady: false,
  },
  currentIds: {
    boardId: '',
    requestId: '',
  },
  board: {
    id: '',
    boardInfo: {
      name: '',
      imageUrl: '',
      description: '',
      fields: [],
      isPlayback: true,
      githubUrl: 'https://github.com/dht/gdi',
      showIntro: true,
    },
    dependencies: {},
    elements: {
      default: {},
    },
  },
  barItems,
  playback: {
    startTime: Date.now(),
    playbackSpeed: 1,
    playbackStatus: 'idle',
  },
  camera: {
    radius: 25,
    alpha: 1,
    beta: 1,
    target: { x: 0, y: 0, z: 0 },
  },
  soundState: {},
  transcriptLines: {
    '1': {
      id: '1',
      speakerName: 'Arnold',
      text: 'Hey guys, have you heard about the new Yu-Gi-Oh set that just came out?',
    },
  },
  logs: {
    1: {
      id: '1',
      message: '',
      source: '',
      timestamp: 0,
      verb: '',
    },
  },
  nodes,
  messages,
  _lastAction: {
    type: 'INIT',
  },
};
