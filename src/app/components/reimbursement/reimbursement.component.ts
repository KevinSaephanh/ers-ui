import { Component, OnInit, Input } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";

@Component({
  selector: "app-reimbursement",
  templateUrl: "./reimbursement.component.html",
  styleUrls: ["./reimbursement.component.css"]
})
export class ReimbursementComponent implements OnInit {
  @Input() reimbursement: Reimbursement = new Reimbursement();

  constructor() {}

  ngOnInit() {
    // Convert type to string
    switch (this.reimbursement.reimbTypeId) {
      case 1:
        this.reimbursement.reimbTypeId = "Lodging";
        break;
      case 2:
        this.reimbursement.reimbTypeId = "Travel";
        break;
      case 3:
        this.reimbursement.reimbTypeId = "Food";
        break;
      case 4:
        this.reimbursement.reimbTypeId = "Other";
        break;
    }

    // Convert status to string
    if (this.reimbursement.reimbStatusId == 1)
      this.reimbursement.reimbStatusId = "Pending";
    else if (this.reimbursement.reimbStatusId == 2)
      this.reimbursement.reimbStatusId = "Approved";
    else if (this.reimbursement.reimbStatusId == 3)
      this.reimbursement.reimbStatusId = "Denied";
  }
}
