import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-reimbursement-form",
  templateUrl: "./reimbursement-form.component.html",
  styleUrls: ["./reimbursement-form.component.css"]
})
export class ReimbursementFormComponent implements OnInit {
  amount: Number;
  description: string;
  reimbTypes: string[] = ["LODGING", "TRAVEL", "FOOD", "OTHER"];
  reimbType: string;

  constructor(private service: UserService) {}

  ngOnInit() {}

  changeReimbType = event => {
    this.reimbType = event.value;
  };

  onSubmit = () => {
    console.log(this.amount);
    console.log(this.description);
    console.log(this.reimbType);
  };
}
