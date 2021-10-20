import { Action, createAction, props } from '@ngrx/store';

import { Psychologist } from '../models/init/Psychologist';
import { ActionReducer } from './../common/enums/ActionReducer';


// Todas las acciones que se van a crear para cargar del Storage
export class addPsychologist implements Action {
  readonly type = ActionReducer.ADD_PSYCHO
  constructor(public payload: Psychologist) { }
}

export class RemovePsychologist implements Action {
  readonly type = ActionReducer.REMOVE_PSYCHO
  constructor() { }
}


export type Actions = addPsychologist | RemovePsychologist;