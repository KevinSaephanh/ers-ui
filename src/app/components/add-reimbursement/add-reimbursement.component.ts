import { Component, OnInit } from "@angular/core";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Add, UploadReceipt } from "src/app/store/actions/reimbursement.action";
import { AppState } from "src/app/store";
import { AuthService } from "src/app/services/auth.service";

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
  type: any;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      console.log(state.reimbursements);
      if (state.reimbursements) {
        this.reimbursement$ = state.reimbursements;
      }
    });

    // Add user info and pending status to reimbursement ticket
    const user = this.authService.getUser();
    this.reimbursement$.authorId = user.id;
    this.reimbursement$.reimbStatusId = 1;
  }

  addReimbursement(): void {
    this.changeFile(this.file).then((base64: string): any => {
      this.reimbursement$.receipt = new Blob([base64], { type: this.type });
      console.log(this.reimbursement$.receipt);
      this.store.dispatch(new Add(this.reimbursement$));
    });
    //window.location.href = `/dashboard/${this.reimbursement.authorId}`;
  }

  onFileSelected(event): void {
    this.file = event.target.files[0];
    this.type = this.file.type;
    // this.changeFile(file).then((base64: string): any => {
    //   this.receipt = new Blob([base64], { type: type });
    // });
  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
