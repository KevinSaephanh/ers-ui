import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { ReimbursementService } from "src/app/services/reimbursement.service";
import { ReimbursementActionTypes } from "../actions/reimbursement.action-types";
import { of, Observable } from "rxjs";
import {
  GetSuccess,
  GetFail,
  UpdateSuccess,
  UpdateFail,
  AddSuccess,
  AddFail
} from "../actions/reimbursement.action";

@Injectable()
export class ReimbursementEffects {
  constructor(
    private actions$: Actions,
    private reimbService: ReimbursementService
  ) {}

  @Effect()
  getReimbs$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.GET_ALL)
    .switchMap(() => {
      return this.reimbService.getAll();
    })
    .map(reimbs => new GetSuccess(reimbs))
    .catch(error => of(new GetFail(error)));

  @Effect()
  addReimb$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.ADD)
    .switchMap(payload => {
      return this.reimbService.add(payload);
    })
    .map(reimb => {
      return new AddSuccess(reimb);
    })
    .catch(error => {
      return of(new AddFail({ error }));
    });

  @Effect()
  addSuccess$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.ADD_SUCCESS)
  );

  @Effect()
  addFail$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.ADD_FAIL)
  );

  @Effect()
  updateReimb$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.UPDATE)
    .switchMap(payload => {
      return this.reimbService.update(payload);
    })
    .map(reimb => {
      return new UpdateSuccess(reimb);
    })
    .catch(error => {
      return of(new UpdateFail({ error }));
    });
}
