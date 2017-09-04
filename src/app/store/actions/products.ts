import { Action } from '@ngrx/store';
import { type } from '../util';
import { Product } from '../../models/product';

export const ACTION_TYPES = {
    LOAD: type('[Products] Load'),
    ADD: type('[Products] Add'),
    REMOVE: type('[Products] Remove'),
    UPDATE: type('[Products] Update'),
    LOADED: type('[Products] Loaded'),
    ADDED: type('[Products] Added'),
    REMOVED: type('[Products] Removed'),
    UPDATED: type('[Products] Updated'),
    FAILED: type('[Products] Failed'),
};

export class LoadAction implements Action {
    readonly type = ACTION_TYPES.LOAD;

    constructor(public payload: any) { }
}

export class AddAction implements Action {
    readonly type = ACTION_TYPES.ADD;

    constructor(public payload: Product) { }
}

export class RemoveAction implements Action {
    readonly type = ACTION_TYPES.REMOVE;

    constructor(public payload: Product) { }
}

export class UpdateAction implements Action {
    readonly type = ACTION_TYPES.UPDATE;

    constructor(public payload: Product) { }
}

export class LoadedAction implements Action {
  readonly type = ACTION_TYPES.LOADED;

  constructor(public payload: any) { }
}

export class AddedAction implements Action {
    readonly type = ACTION_TYPES.ADDED;

    constructor(public payload: any) { }
}

export class RemovedAction implements Action {
  readonly type = ACTION_TYPES.REMOVED;

  constructor(public payload: any) { }
}

export class UpdatedAction implements Action {
  readonly type = ACTION_TYPES.UPDATED;

  constructor(public payload: any) { }
}

export class FailedAction implements Action {
  readonly type = ACTION_TYPES.FAILED;

  constructor(public payload: any) { }
}

export type Actions
    = LoadAction
    | AddAction
    | RemoveAction
    | UpdateAction
    | LoadedAction
    | AddedAction
    | RemovedAction
    | UpdatedAction
    | FailedAction;
