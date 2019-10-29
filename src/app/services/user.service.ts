import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  signupForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl(""),
    password: new FormControl(""),
    email: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl(""),
    password: new FormControl("")
  });

  reimbursementForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    amount: new FormControl(0),
    description: new FormControl(""),
    reimbTypes: new FormControl("")
  });
}
