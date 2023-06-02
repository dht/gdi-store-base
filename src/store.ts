import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { StoreBuilder } from './builders/StoreBuilder';
import { initialState } from './initialState';
import { IGdiStore } from './types';

export const reducers = generateReducersForStore<IGdiStore>(initialState);

let sagaMiddleware: any;

export const initStore = (root: any) => {
  const storeBuilder = new StoreBuilder('gdi');

  storeBuilder
    .withReducers(reducers)
    .withInitialState(initialState)
    .withDevtoolsExtensions(true)
    .withSagas(root);

  sagaMiddleware = storeBuilder.getSagaMiddleware();

  return storeBuilder;
};

export const runSaga = (saga: any) => {
  sagaMiddleware.run(saga);
};

export const clearState = (store: any) => {
  setTimeout(() => {
    store.dispatch(actions.transcriptLines.clear());
    store.dispatch(actions.board.get());
    store.dispatch(actions.nodes.setAll({}));
  });

  return store;
};
