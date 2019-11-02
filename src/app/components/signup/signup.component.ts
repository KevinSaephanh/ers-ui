import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  roles = ["Employee", "Manager"];
  role: string;

  constructor() {}

  ngOnInit() {}

  changeRole = e => {
    this.role = e.value;
  };

  signup = () => {
    console.log(this.username);
  };
}
