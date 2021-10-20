import { Action, MetaReducer } from '@ngrx/store';
import * as StoreActions from '../store/store.action'

import { ActionReducer } from './../common/enums/ActionReducer';

import { Psychologist } from '../models/init/Psychologist';


// Estado inicial
const initialState: Psychologist = new Psychologist();


export function reducer(state: Psychologist = initialState, action: StoreActions.Actions) {
  switch (action.type) {
    case ActionReducer.ADD_PSYCHO:
      return action.payload;
      break;

    case ActionReducer.REMOVE_PSYCHO:
      state = new Psychologist();

      return state;
      break;

    default:
      return action.payload;
      break;
  }
}