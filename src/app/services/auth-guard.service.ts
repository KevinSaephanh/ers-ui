import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./auth.service";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(): boolean {
    // Check if local storage has a token
    if (!localStorage.getItem("token")) {
      this.router.navigateByUrl("/login");
      return false;
    }

    // Check if token id matches parameter id or token role is 2 (Manager)
    const token = jwt_decode(this.authService.getToken());
    if (token.id == this.route.snapshot.paramMap.get("id") || token.role == 2)
      return true;
    return false;
  }
}
