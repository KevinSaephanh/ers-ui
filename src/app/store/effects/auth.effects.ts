import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import { AuthActionTypes } from "../actions/auth.action-types";
import {
  LoginSuccess,
  LoginFail,
  Login,
  Signup,
  SignupSuccess,
  SignupFail
} from "../actions/auth.actions";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  SignUp: Observable<any> = this.actions
    .ofType(AuthActionTypes.SIGNUP)
    .map((action: Signup) => action.payload)
    .switchMap(payload => {
      return this.authService
        .signUp(payload.user)
        .map(() => {
          return new SignupSuccess({});
        })
        .catch(error => {
          return of(new SignupFail({ error }));
        });
    });

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap(() => {
      this.router.navigateByUrl("/login");
    })
  );

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
        .map(user => {
          return new LoginSuccess({ token: user });
        })
        .catch(error => {
          return of(new LoginFail({ error }));
        });
    });

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      const token = jwt_decode(user.payload.token);
      console.log(token);
      localStorage.setItem("token", token);
      this.router.navigateByUrl(`/dashboard/${token.id}`);
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
