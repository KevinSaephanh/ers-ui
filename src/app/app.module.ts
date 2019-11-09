import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Custom Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AddReimbursementComponent } from "./components/add-reimbursement/add-reimbursement.component";

// Material Module
import { MaterialModule } from "./material/material.module";
import { ErrorComponent } from "./components/error/error.component";

import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { RootReducer } from "./store/index";
import { AuthService } from "./services/auth.service";
import { ReimbursementService } from "./services/reimbursement.service";
import { AuthEffects } from "./store/effects/auth.effects";
import { ReimbursementEffects } from "./store/effects/reimbursements.effects";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { ReimbursementComponent } from "./components/reimbursement/reimbursement.component";
import { ReimbursementsComponent } from "./components/reimbursements/reimbursements.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    AddReimbursementComponent,
    DashboardComponent,
    AddReimbursementComponent,
    ReimbursementComponent,
    ReimbursementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(RootReducer),
    EffectsModule.forRoot([AuthEffects, ReimbursementEffects])
  ],
  providers: [AuthService, ReimbursementService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
