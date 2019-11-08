import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { Store } from "@ngrx/store";
import { Signup } from "src/app/store/actions/auth.actions";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: User = new User();
  roles = ["Employee", "Manager"];

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  signup(): void {
    this.store.dispatch(new Signup(this.user));
  }
}
