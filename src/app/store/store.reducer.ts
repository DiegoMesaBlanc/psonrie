import { Action, MetaReducer } from '@ngrx/store';
import * as StoreActions from '../store/store.action'

import { ActionReducer } from './../common/enums/ActionReducer';

import { Psychologist } from '../models/init/Psychologist';


// Estado inicial
const initialState: Psychologist = new Psychologist();

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}


export function reducer(state: Psychologist = initialState, action: StoreActions.Actions) {
  switch (action.type) {
    case ActionReducer.ADD_PSYCHO:
      return newState(state, action.payload);
      break;

    case ActionReducer.REMOVE_PSYCHO:
      state = new Psychologist();

      return state;
      break;

    default:
      return state;
      break;
  }
}


export const metaReducers: MetaReducer<any>[] = [];