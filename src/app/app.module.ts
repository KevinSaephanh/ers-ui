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
import { ReimbursementFormComponent } from "./components/reimbursement-form/reimbursement-form.component";

// Services
import { UserService } from "./services/user.service";

// Material Module
import { MaterialModule } from "./material/material.module";
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ReimbursementFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
