import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-add-reimbursement",
  templateUrl: "./add-reimbursement.component.html",
  styleUrls: ["./add-reimbursement.component.css"]
})
export class AddReimbursementComponent implements OnInit {
  amount: Number;
  description: string;
  reimbTypes: string[] = ["LODGING", "TRAVEL", "FOOD", "OTHER"];
  reimbType: string;

  constructor(private store: Store<{ reimbursements: Reimbursement[] }>) {}

  ngOnInit() {}

  changeReimbType = e => {
    this.reimbType = e.value;
  };

  addReimbursement(reimbursement: Reimbursement) {
    // this.store.dispatch(new ReimbursementAdd(reimbursement));
  }

  onSubmit = () => {
    console.log(this.amount);
    console.log(this.description);
    console.log(this.reimbType);
  };
}
