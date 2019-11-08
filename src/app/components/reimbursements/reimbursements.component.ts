import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Reimbursement } from "src/app/models/Reimbursement";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { GetAll } from "src/app/store/actions/reimbursement.action";

@Component({
  selector: "app-reimbursements",
  templateUrl: "./reimbursements.component.html",
  styleUrls: ["./reimbursements.component.css"]
})
export class ReimbursementsComponent implements OnInit {
  reimbursements$: Observable<Reimbursement[]>;
  getState: Observable<any>;
  page: any;

  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    // Get page number from url
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get("page"))))
      .subscribe(page => (this.page = page));
    this.store.dispatch(new GetAll(this.page));

    // Update reimbursements
    this.getState.subscribe(state => {
      this.reimbursements$ = state.reimbursements;
    });
    console.log(this.reimbursements$);
  }
}
