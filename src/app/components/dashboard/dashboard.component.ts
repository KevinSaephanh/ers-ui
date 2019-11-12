import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { GetUsersReimbs } from "src/app/store/actions/reimbursement.action";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ReimbState } from "src/app/store/reducers/reimbursement.reducer";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  reimbursements$: Observable<ReimbState>;
  getState: Observable<any>;
  id: any;

  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    // Get user id from url and retrieve associated reimbursements
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get("id"))))
      .subscribe(id => (this.id = id));
    this.store.dispatch(new GetUsersReimbs(this.id));

    // Update reimbursements
    this.getState.subscribe(state => {
      if (state.reimbursements) this.reimbursements$ = state.reimbursements;
    });
  }
}
