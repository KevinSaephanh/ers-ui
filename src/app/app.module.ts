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

// Material Module
import { MaterialModule } from "./material/material.module";
import { ErrorComponent } from "./components/error/error.component";

import { StoreModule } from "@ngrx/store";
import { RootReducer } from "./store/reducers/root-reducer";
import { ReimbursementComponent } from "./components/reimbursement/reimbursement.component";
import { AddReimbursementComponent } from "./components/add-reimbursement/add-reimbursement.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    ReimbursementComponent,
    AddReimbursementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot(RootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
