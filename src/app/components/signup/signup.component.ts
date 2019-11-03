import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { Store } from "@ngrx/store";
import { Signup } from "src/app/store/actions/auth.actions";
import { AppState, selectAuthState } from "src/app/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  roles = ["Employee", "Manager"];
  error: string | null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.error = state.error;
    });
  }

  onRadioChange(value) {
    this.user.role = value;
  }

  signup(): void {
    console.log(this.user);
    this.store.dispatch(new Signup(this.user));
  }
}
