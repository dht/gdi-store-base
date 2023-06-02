import { IBarItem } from './types';

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;

export const barItems: IBarItem[] = [
  {
    id: 'boardId',
    value: '$boardIdShort',
  },
  {
    id: 'examples',
    value: '$examplesCount',
    emoji: '💡',
  },
  {
    id: 'adapter',
    value: '$promptAdapterName',
    emoji: '🔌',
  },
  {
    id: 'resolution',
    value: '$resolution',
  },
  {
    id: 'time',
    value: '$time',
  },
  {
    id: 'commandPalette',
    value: 'k',
    modifier: isMac ? '⌘' : 'ctrl',
  },
];
