import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Add } from "src/app/store/actions/reimbursement.action";

@Component({
  selector: "app-add-reimbursement",
  templateUrl: "./add-reimbursement.component.html",
  styleUrls: ["./add-reimbursement.component.css"]
})
export class AddReimbursementComponent implements OnInit {
  reimbursement: Reimbursement = new Reimbursement();
  reimbTypes: string[] = ["LODGING", "TRAVEL", "FOOD", "OTHER"];
  getState: Observable<any>;
  error: string | null;

  constructor(private store: Store<any>) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.error = state.error;
    });
  }

  addReimbursement(): void {
    this.store.dispatch(new Add(this.reimbursement));
  }
}
