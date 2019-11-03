import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import { AuthActionTypes } from "../actions/auth.action-types";
import { LoginSuccess, LoginFail, Login } from "../actions/auth.actions";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  SignUpFail: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAIL)
  );

  @Effect()
  Login: Observable<any> = this.actions
    .ofType(AuthActionTypes.LOGIN)
    .map((action: Login) => action.payload)
    .switchMap(payload => {
      return this.authService
        .login(payload.username, payload.password)
        .map(() => {
          return new LoginSuccess({});
        })
        .catch(err => {
          return of(new LoginFail({ error: err }));
        });
    });

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      localStorage.setItem("token", user.payload.token);
      this.router.navigateByUrl(`/dashboard/${user.payload.id}`);
    })
  );

  @Effect({ dispatch: false })
  LogInFail: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAIL)
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      localStorage.removeItem("token");
    })
  );
}
