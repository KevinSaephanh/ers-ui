import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { Store } from "@ngrx/store";
import { AppState, selectAuthState } from "src/app/store";
import { Login } from "src/app/store/actions/auth.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  error: string | null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.error = state.error;
    });
  }

  login() {
    const payload = {
      username: this.user.username,
      password: this.user.password
    };
    this.store.dispatch(new Login(payload));
  }
}
