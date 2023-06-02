import { IBarItems } from './types';

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;

export const barItems: IBarItems = {
  boardId: {
    id: 'boardId',
    value: '$boardIdShort',
  },
  examples: {
    id: 'examples',
    value: '$examplesCount',
    emoji: '💡',
  },
  adapter: {
    id: 'adapter',
    value: '$promptAdapterName',
    emoji: '🔌',
  },
  resolution: {
    id: 'resolution',
    value: '$resolution',
  },
  time: {
    id: 'time',
    value: '$time',
  },
  commandPalette: {
    id: 'commandPalette',
    value: 'k',
    modifier: isMac ? '⌘' : 'ctrl',
  },
};
