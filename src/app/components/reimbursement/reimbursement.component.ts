import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ReimbursementActionTypes } from "src/app/store/actions/reimbursement.action-types";

@Component({
  selector: "app-reimbursement",
  templateUrl: "./reimbursement.component.html",
  styleUrls: ["./reimbursement.component.css"]
})
export class ReimbursementComponent implements OnInit {
  reimbursements$: Observable<Reimbursement[]>;

  constructor(private store: Store<{ reimbursements: Reimbursement[] }>) {
    store.pipe(select("reimbursements")).subscribe(values => {
      this.reimbursements$ = values;
    });
  }

  ngOnInit() {
    console.log(this.reimbursements$);
    this.store.dispatch({ type: ReimbursementActionTypes.GET_ALL });
  }
}
