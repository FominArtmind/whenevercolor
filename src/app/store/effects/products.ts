import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as act from '../actions/products';
import { ProductsService } from '../../services/products.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
// import {ToasterService} from 'angular2-toaster';
// import { mapKeys, keys, isObject } from 'lodash';

@Injectable()
export class ProductsEffects {
    @Effect()
    load$: Observable<Action> = this.actions$.ofType(act.ACTION_TYPES.LOAD)
        .debounceTime(300)
        .map((action: act.LoadedAction) => action.payload)
        .switchMap(payload => { console.log('LOAD', payload); return this.productsService.load()
            .map(res => new act.LoadedAction(res))
            .catch(err => Observable.of(new act.FailedAction(err))); }
        );

    @Effect()
    add$: Observable<Action> = this.actions$.ofType(act.ACTION_TYPES.ADD)
        .debounceTime(300)
        .map((action: act.UpdateAction) => action.payload)
        .switchMap(payload => this.productsService.add(payload)
            .map(res => new act.AddedAction(res))
            .catch(err => Observable.of(new act.FailedAction(err)))
        );

    @Effect()
    remove$: Observable<Action> = this.actions$.ofType(act.ACTION_TYPES.REMOVE)
        .debounceTime(300)
        .map((action: act.UpdateAction) => action.payload)
        .switchMap(payload => this.productsService.remove(payload)
            .map(res => new act.RemovedAction(payload))
            .catch(err => Observable.of(new act.FailedAction(err)))
        );

    @Effect()
    update$: Observable<Action> = this.actions$.ofType(act.ACTION_TYPES.UPDATE)
        .debounceTime(300)
        .map((action: act.UpdateAction) => action.payload)
        .switchMap(payload => this.productsService.update(payload)
            .map(res => new act.UpdatedAction(res))
            .catch(err => Observable.of(new act.FailedAction(err)))
        );

    @Effect({dispatch: false})
    fail$: Observable<Action> = this.actions$.ofType(act.ACTION_TYPES.FAILED)
        .debounceTime(300)
        .map((action: act.UpdateAction) => action.payload)
        .switchMap(payload => {
            console.log('SERVER ERROR:', payload);
            // this.toasterService.pop('error', 'Failure',
            //     isObject(payload.error) ? keys(
            //     mapKeys(payload.error, (value: Array<string>, key: string) => `${key}: ${value.join(';')}`)).join(';') :
            //     payload.error);
            return Observable.of();
        });

    constructor(private actions$: Actions, private productsService: ProductsService
        // , private toasterService: ToasterService) {
    ) {
    }
}
