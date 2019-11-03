import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: User = new User();
  roles = ["Employee", "Manager"];

  constructor() {}

  ngOnInit() {}

  signup = () => {
    console.log(this.user.username);
  };
}
