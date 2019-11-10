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
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  Signup$: Observable<any> = this.actions$
    .ofType(AuthActionTypes.SIGNUP)
    .map((action: Signup) => action.payload)
    .switchMap(payload => {
      return this.authService
        .signUp(payload)
        .map(() => {
          return new SignupSuccess({});
        })
        .catch(error => {
          return of(new SignupFail({ error }));
        });
    });

  @Effect({ dispatch: false })
  SignupSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap(() => {
      this.router.navigateByUrl("/login");
    })
  );

  @Effect({ dispatch: false })
  SignupFail$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP_FAIL)
  );

  @Effect()
  Login$: Observable<any> = this.actions$
    .ofType(AuthActionTypes.LOGIN)
    .map((action: Login) => action.payload)
    .switchMap(payload => {
      return this.authService
        .login(payload.username, payload.password)
        .map(user => {
          // Set token in local storage and decode
          localStorage.setItem("token", JSON.stringify(user));
          const token = jwt_decode(user);
          console.log(token);
          return new LoginSuccess({ user: token });
        })
        .catch(error => {
          return of(new LoginFail({ error }));
        });
    });

  @Effect({ dispatch: false })
  LoginSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      const token = user.payload.user;
      this.router.navigateByUrl(`/dashboard/${token.id}`);
    })
  );

  @Effect({ dispatch: false })
  LogInFail$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_FAIL)
  );

  @Effect({ dispatch: false })
  Logout$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      this.authService.removeToken();
      this.router.navigateByUrl("/login");
    })
  );
}
