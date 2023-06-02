import { createSelector } from 'reselect';
import { IGdiStore } from '../types';

export const $i = (state: IGdiStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAppState = createSelector($i, (state: IGdiStore) =>state.appState); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IGdiStore) => state.currentIds); // prettier-ignore
export const $rawBoard = createSelector($i, (state: IGdiStore) => state.board); // prettier-ignore
export const $rawBarItems = createSelector($i, (state: IGdiStore) =>state.barItems); // prettier-ignore
export const $rawBoardInfo = createSelector($i, (state: IGdiStore) => state.board.boardInfo); // prettier-ignore
export const $rawPlayback = createSelector($i, (state: IGdiStore) => state.playback); // prettier-ignore
export const $rawTranscriptLines = createSelector($i, (state: IGdiStore) => state.transcriptLines); // prettier-ignore
export const $rawLogs = createSelector($i, (state: IGdiStore) => state.logs); // prettier-ignore
export const $rawMessages = createSelector($i, (state: IGdiStore) => state.messages); // prettier-ignore
export const $rawNodes = createSelector($i, (state: IGdiStore) => state.nodes); // prettier-ignore
export const $rawCamera = createSelector($i, (state: IGdiStore) => state.camera); // prettier-ignore
