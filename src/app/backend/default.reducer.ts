import { IAction, IState } from "@dcs/ngx-utils";
import { fromJS } from "immutable";

export const DEFAULT_INITIAL_STATE: IState = fromJS({
  entities: [],
  loading: false,
  error: null
});

export function defaultFetchReducer(
  state: IState,
  actions: any,
  action: IAction,
  initialState: IState = DEFAULT_INITIAL_STATE
): IState {
  switch (action.type) {
    case actions.start:
      return initialState.set("loading", true);

    case actions.next:
      return initialState.set("entities", fromJS(action.payload));

    case actions.error:
      return initialState.set("error", fromJS(action.payload));
  }

  return state;
}

export function defaultDeleteReducer(
  state: IState,
  actions: any,
  action: IAction,
  initialState: IState = DEFAULT_INITIAL_STATE
): IState {
  switch (action.type) {
    case actions.start:
      return state.set("loading", true);

    case actions.next:
      const newList = state
        .get("entities")
        .filter((entry: any) => entry.get("id") !== action.payload.get("id"));
      return initialState.set("entities", newList);

    case actions.error:
      return state.set("error", fromJS(action.payload)).set("loading", false);
  }

  return state;
}

export function defaultInsertReducer(
  state: IState,
  actions: any,
  action: IAction
): IState {
  switch (action.type) {
    case actions.start:
      return state.set("loading", true);

    case actions.next:
      return state
        .update("entities", entities => entities.push(fromJS(action.payload)))
        .set("loading", false)
        .set("error", null);

    case actions.error:
      return state.set("error", fromJS(action.payload)).set("loading", false);
  }

  return state;
}
