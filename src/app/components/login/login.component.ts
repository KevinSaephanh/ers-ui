import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private service: UserService) {}

  ngOnInit() {}

  login = () => {
    console.log(this.username);
    console.log(this.password);

    window.location.href = "/reimbursement";
  };
}
