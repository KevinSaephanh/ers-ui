import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Store, select } from "@ngrx/store";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Observable } from "rxjs";
import * as jwt_decode from "jwt-decode";
import { ReimbursementActionTypes } from "src/app/store/actions/reimbursement.action-types";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  reimbursements$: Observable<Reimbursement[]>;
  id: number;

  constructor(private authService: AuthService, private store: Store<any>) {
    const token = this.authService.getToken();
    const decoded = jwt_decode(token);
    this.id = decoded.id;

    this.store.pipe(select("reimbursements")).subscribe(values => {
      this.reimbursements$ = values;
    });
  }

  ngOnInit() {
    this.store.dispatch({ type: ReimbursementActionTypes.GET_USERS_REIMBS });
    console.log(this.reimbursements$);
  }
}
