import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { StoreBuilder } from './builders/StoreBuilder';
import { initialState } from './initialState';
import { IGdiStore } from './types';
import { lastActionReducer } from './utils/lastAction';
import { logMiddleware } from './middlewares/midLog';

export const reducers = generateReducersForStore<IGdiStore>(initialState);

let sagaMiddleware: any;

export const initStore = (root: any) => {
  const storeBuilder = new StoreBuilder('gdi');

  storeBuilder
    .withReducers(reducers)
    .withReducers({ _lastAction: lastActionReducer })
    .withMiddlewares(logMiddleware)
    .withInitialState(initialState)
    .withDevtoolsExtensions(true)
    .withSagas(root);

  sagaMiddleware = storeBuilder.getSagaMiddleware();

  return storeBuilder;
};

export const runSaga = (saga: any) => {
  sagaMiddleware.run(saga);
};
