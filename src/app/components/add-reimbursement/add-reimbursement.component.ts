import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Add, UploadReceipt } from "src/app/store/actions/reimbursement.action";
import { AppState } from "src/app/store";
import { AuthService } from "src/app/services/auth.service";
import { ReimbursementService } from "src/app/services/reimbursement.service";

@Component({
  selector: "app-add-reimbursement",
  templateUrl: "./add-reimbursement.component.html",
  styleUrls: ["./add-reimbursement.component.css"]
})
export class AddReimbursementComponent implements OnInit {
  reimbursement$: Reimbursement = new Reimbursement();
  reimbTypes: string[] = ["LODGING", "TRAVEL", "FOOD", "OTHER"];
  getState: Observable<any>;
  file: any;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private reimbService: ReimbursementService
  ) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    // Add user info and pending status to reimbursement ticket
    const user = this.authService.getUser();
    this.reimbursement$.authorId = user.id;
    this.reimbursement$.reimbStatusId = 1;
  }

  async addReimbursement() {
    this.reimbursement$.reimbImgString = await this.imgUpload();
    this.store.dispatch(new Add(this.reimbursement$));
  }

  async imgUpload() {
    let reimbImg = await this.reimbService.uploadReceipt(this.file);
    return reimbImg;
  }
}
