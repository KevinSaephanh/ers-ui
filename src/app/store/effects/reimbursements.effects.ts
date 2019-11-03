import { Injectable } from "@angular/core";

import { Actions } from "@ngrx/effects";
import { ReimbursementService } from "src/app/services/reimbursement.service";

@Injectable()
export class ReimbursementEffects {
  constructor(
    private actions$: Actions,
    private reimbursementService: ReimbursementService
  ) {}
}
