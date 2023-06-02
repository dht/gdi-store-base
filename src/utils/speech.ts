export const getSpeechUrl = (storageUrl: string, transcriptId: string, lineIndex: number) => {
  return `${storageUrl}/%2Ftranscript-${transcriptId}%2Fline-${lineIndex}.mp3?alt=media`;
};
