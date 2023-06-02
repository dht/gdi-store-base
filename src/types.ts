import { IBoard } from 'igrid';

export type Json = Record<string, any>;

export type IGdiStore = {
  appState: IAppState;
  currentIds: ICurrentIds;
  board: IBoard;
  playback: IPlayback;
  camera: ICamera;
  soundState: Json;
  logs: ILogs;
  nodes: INodes;
  messages: IMessages;
  transcriptLines: ITranscriptLines;
  barItems: IBarItems;
  _lastAction: Action;
};

export type IAppState = {
  flavour: string; // base, prepare, outcome
  prompt: string;
  promptPlaceholder: string;
  adapter: string;
  lineIndex: number;
  lineDuration?: number;
  transcriptId?: string;
  githubUrl?: string;
  storageUrl?: string;
  isMac: boolean;
  is24Hours: boolean;
  showLog: boolean;
  cmdKey: string;
  screenWidth: number;
  screenHeight: number;
  imageUrl: string;
  isDataReady: boolean;
};

export type ICurrentIds = {
  boardId: string;
  requestId: string;
};

export type IPlayback = {
  startTime: number;
  playbackSpeed: number;
  playbackStatus: 'idle' | 'playing';
};

export type ICamera = {
  radius: number;
  alpha: number;
  beta: number;
  target: Vector;
};

export type ITranscriptLine = {
  id: string;
  speakerName: string;
  text: string;
  audioUrl?: string;
  textPhonetics?: string;
  timestamp?: number;
  duration?: number;
};

export type ITranscriptLines = Record<string, ITranscriptLine>;

export type ILog = {
  id: string;
  source: string;
  verb: string;
  timestamp: number;
  message: string;
  data?: Json;
};

export type ILogs = Record<string, ILog>;

export type INode = {
  id: string;
  nodeType: NodeType;
  label: string;
  promptTemplate?: IPromptTemplate;
  agent?: IAgent;
  model?: IModel;
  api?: IApi;
  position: Position;
  connectors: string[];
  price?: number;
  duration?: number;
  tokensCount?: number;
  // transient
  isRunning?: boolean;
};

export type INodes = Record<string, INode>;

export type IBarItem = {
  id: string;
  value: string;
  emoji?: string;
  modifier?: string;
  actionId?: string;
  eventId?: string;
  isHidden?: boolean;
};

export type IBarItems = Record<string, IBarItem>;

// ================== types ==================
export type Position = {
  x: number;
  y: number;
};

export type Vector = {
  x: number;
  y: number;
  z: number;
};

export type NodeType = 'llm' | 'api' | 'outcome';

export type IPromptTemplate = {
  content: string;
};

export type AgentMode = 'continues' | 'singular';

export type IAgent = {
  mode: AgentMode;
  system: string;
  includeContext?: boolean;
};

export type MessageRole = 'assistant' | 'user' | 'system';

export type IMessage = {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: number;
};

export type IMessages = Record<string, IMessage>;

export type ModelType = 'openAI';

export type IModel = {
  modelType: ModelType;
  modelName: string;
  temperature?: number;
  maxTokens?: number;
};

export type ApiType = 'elevenLabs' | 'dalle' | 'whisper' | 'openJourney';
export type ApiFormatInput = 'default' | 'conversation';

export type IApi = {
  apiType: ApiType;
  formatInput: ApiFormatInput;
  purpose?: string;
};

export type IFlowEdge = {
  id: string;
  source: string;
  target: string;
};

export type IFlowNode = {
  id: string;
  type: string;
  label: string;
  position: Position;
  config: INode;
};

// ================== utilities ==================
export interface StoreDefinition {
  name: string;
  initialState: Json;
  reducers: any;
  middlewares: any;
  enhancers: any;
  sagas: any;
  sagasContext: any;
  enableDevtoolsExtension: boolean;
  sagaMonitor: any;
}

export type Action = {
  type: string;
  id?: string;
  payload?: Json;
};
