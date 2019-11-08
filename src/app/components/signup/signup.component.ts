import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { Store } from "@ngrx/store";
import { Signup } from "src/app/store/actions/auth.actions";
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
  error: {
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
  };

  constructor(private store: Store<any>) {
    this.getState = this.store.select("user");
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.error = state.error;
    });
  }

  signup(): void {
    this.store.dispatch(new Signup(this.user));
  }
}
