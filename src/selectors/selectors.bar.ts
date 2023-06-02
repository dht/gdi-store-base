import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { findResolution } from '../utils/resolution';
import { upperFirst } from 'shared-base';

export const $barItemsVariables = createSelector(
  raw.$rawBoard,
  raw.$rawAppState,
  (board, appState) => {
    const { screenWidth, adapter } = appState;
    const { id: boardId, examples = {} } = board;

    const resolution = findResolution(screenWidth);
    const examplesCount = Object.keys(examples).length;

    return {
      $boardIdShort: shortId(boardId),
      $examplesCount: examplesCount,
      $promptAdapterName: adapter,
      $resolution: resolution,
    } as any;
  }
);

export const $barItems = createSelector(
  raw.$rawBarItems,
  $barItemsVariables,
  (barItems, variables) => {
    return Object.values(barItems).map((barItem) => {
      const { id, value, emoji, modifier } = barItem;

      const parsedValue = value in variables ? variables[value] : value;

      return {
        id,
        value: String(parsedValue),
        emoji,
        modifier,
        // isHidden: parsedValue === 0,
      };
    });
  }
);

function shortId(id: string) {
  return upperFirst(id.split('.').pop() ?? '');
}
