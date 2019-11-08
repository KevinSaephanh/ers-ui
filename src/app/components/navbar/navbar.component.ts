import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Logout } from "src/app/store/actions/auth.actions";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  getState: Observable<any>;
  id: any;
  role: any;
  profileLink: string;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select("auth");
  }

  ngOnInit() {
    // Check if user is authenticated
    if (localStorage.getItem("token")) {
      const user = this.authService.getUser();
      this.id = user.id;
      this.role = user.role;
      this.profileLink = `/dashboard/${this.id}`;
    }
  }

  checkIfLoggedIn(): boolean {
    const authenticated = this.authService.getToken();
    if (authenticated != null) return true;
    return false;
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
