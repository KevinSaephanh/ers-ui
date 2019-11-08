import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Logout } from "src/app/store/actions/auth.actions";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  getState: Observable<any>;

  constructor(private authService: AuthService, private store: Store<any>) {
    this.getState = this.store.select("user");
  }

  ngOnInit() {}

  checkIfLoggedIn() {
    const authenticated = this.authService.getToken();
    if (authenticated != null) return true;
    return false;
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
