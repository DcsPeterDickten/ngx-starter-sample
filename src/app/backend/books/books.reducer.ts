import { IAction, IState } from '@dcs/ngx-utils';
import { fetchActions, deleteActions, insertActions } from './books.actions';
import {
  defaultFetchReducer,
  defaultDeleteReducer,
  defaultInsertReducer,
} from '../default.reducer';
import { DEFAULT_INITIAL_STATE as INITIAL_STATE } from '../default.reducer';

export function booksReducer(state: IState = INITIAL_STATE, action: IAction): IState {
  state = defaultFetchReducer(state, fetchActions, action);
  state = defaultDeleteReducer(state, deleteActions, action);
  state = defaultInsertReducer(state, insertActions, action);
  return state;
}
