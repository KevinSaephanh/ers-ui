import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Add } from "src/app/store/actions/reimbursement.action";
import { AppState } from "src/app/store";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-add-reimbursement",
  templateUrl: "./add-reimbursement.component.html",
  styleUrls: ["./add-reimbursement.component.css"]
})
export class AddReimbursementComponent implements OnInit {
  reimbursement: Reimbursement = new Reimbursement();
  reimbTypes: string[] = ["LODGING", "TRAVEL", "FOOD", "OTHER"];
  getReimbState: Observable<any>;
  error: string | null;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.getReimbState = this.store.select("reimbursement");
  }

  ngOnInit() {
    this.getReimbState.subscribe(state => {
      this.error = state.error;
    });

    const user = this.authService.getUser();
    this.reimbursement.authorId = user.id;
    this.reimbursement.reimbStatusId = 1;
  }

  addReimbursement(): void {
    console.log(this.reimbursement);
    this.store.dispatch(new Add(this.reimbursement));
  }
}
