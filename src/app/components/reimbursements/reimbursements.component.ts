import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { GetAll, Update } from "src/app/store/actions/reimbursement.action";
import { ReimbState } from "src/app/store/reducers/reimbursement.reducer";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-reimbursements",
  templateUrl: "./reimbursements.component.html",
  styleUrls: ["./reimbursements.component.css"]
})
export class ReimbursementsComponent implements OnInit {
  reimbursements$: Observable<ReimbState>;
  getState: Observable<any>;
  page: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private authService: AuthService
  ) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    // Get page number from url
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get("page"))))
      .subscribe(page => (this.page = page));
    this.store.dispatch(new GetAll(this.page));

    // Set reimbursements equal to state reimbursements
    this.getState.subscribe(state => {
      if (state.reimbursements) {
        this.reimbursements$ = state.reimbursements;
        console.log(this.reimbursements$);
      }
    });
  }

  isPending(reimb) {
    if ((reimb.reimbStatusId = "Pending")) return true;
    else return false;
  }

  updateTicket(reimb, newStatusId): void {
    // Check if admin is trying to resolve his/her own ticket
    const user = this.authService.getUser();
    if (user.id == reimb.authorId) return;

    // Set reimbursement details and send update request
    let r = reimb;
    r.resolverId = user.id;
    r.reimbStatusId = newStatusId;
    r.submitted = null;

    switch (r.reimbTypeId) {
      case "Lodging":
        r.reimbTypeId = 1;
        break;
      case "Travel":
        r.reimbTypeId = 2;
        break;
      case "Food":
        r.reimbTypeId = 3;
        break;
      case "Other":
        r.reimbTypeId = 4;
        break;
    }
    this.store.dispatch(new Update(r));
  }
}
