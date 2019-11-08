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
  id: any;

  constructor(private authService: AuthService, private store: Store<any>) {
    this.getState = this.store.select("auth");
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      //      this.id = state.user.id;
      console.log(state);
    });
    // console.log(this.id);
  }

  checkIfLoggedIn(): boolean {
    const authenticated = this.authService.getToken();
    if (authenticated != null) return true;
    return false;
  }

  toProfile(): void {
    console.log("Hello");
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
