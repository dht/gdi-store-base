import { createSelector } from 'reselect';
import { transformNodesToGraph } from '../utils/flows';
import { charactersMaps } from '../utils/phonetics';
import { getSpeechUrl } from '../utils/speech';
import * as raw from './selectors.raw';
import { Json } from '../types';
import { sortBy } from 'shared-base';

export const $logs = createSelector(raw.$rawLogs, (logs) => {
  return Object.values(logs).sort(sortBy('timestamp'));
});

export const $githubUrl = createSelector(raw.$rawBoardInfo, (boardInfo) => {
  return boardInfo.githubUrl;
});

export const $playbackInfo = createSelector(
  raw.$rawAppState,
  raw.$rawPlayback,
  (appState, playback) => {
    return {
      prompt: appState.prompt,
      flavour: appState.flavour,
      ...playback,
    };
  }
);

export const $flow = createSelector(raw.$rawNodes, (nodes) => {
  return transformNodesToGraph(nodes);
});

export const $transcript = createSelector(raw.$rawTranscriptLines, (lines) => {
  return Object.values(lines).map((line) => {
    const { text = '' } = line;

    return {
      ...line,
      text: text.trim().replace(/^"/, '').replace(/"$/, ''),
    };
  });
});

export const $transcriptForAnimation = createSelector(
  raw.$rawAppState,
  $transcript,
  (appState, sentences) => {
    const { transcriptId, storageUrl = '' } = appState;

    return sentences
      .map((sentence: any, index: number) => {
        const { id: sentenceId, speakerName, audioUrl, textPhonetics } = sentence;

        const character = charactersMaps[speakerName];

        if (!character) {
          return;
        }

        const characterId = character.id;
        const isBack = character.isBack;

        return {
          id: `${transcriptId}-${sentenceId}`,
          audioUrl: getSpeechUrl(storageUrl, transcriptId!, index + 1),
          characterId,
          isBack,
          sentence: textPhonetics,
        };
      })
      .filter((i) => i);
  }
);

export const $transcriptCurrentIndex = createSelector(raw.$rawAppState, (appState) => {
  const { lineIndex } = appState;
  return lineIndex;
});

export const $examplesAndSiblingsList = createSelector(raw.$rawBoard, (board) => {
  const { examples = {}, siblings = {} } = board;

  const links: Json[] = [];

  Object.values(examples).forEach((example) => {
    const { requestId: id, name, description, requestId } = example;

    const url = `#${requestId}`;

    links.push({
      id,
      tabId: 'Examples',
      name,
      description,
      url,
    });
  });

  Object.values(siblings)
    .filter((sibling) => sibling.isEnabled)
    .forEach((sibling) => {
      const { boardId: id, name, description, boardId } = sibling;

      const url = `/boards/${boardId}`;

      links.push({
        id,
        tabId: 'Siblings',
        name,
        description,
        url,
      });
    });

  return {
    tabs: ['Siblings', 'Examples'],
    links: links,
  };
});

export const $barItemsVariables = createSelector(raw.$rawBoard, (board) => {});

export const $messages = createSelector(raw.$rawMessages, (messages) => {
  return Object.values(messages).sort(sortBy('timestamp'));
});
