import { Component, OnInit } from "@angular/core";
import { AppState, selectAuthState } from "src/app/store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Logout } from "src/app/store/actions/auth.actions";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  getState: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {}

  checkIfLoggedIn() {
    if (localStorage.getItem("token")) return true;
    return false;
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
