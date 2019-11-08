import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Route
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { ErrorComponent } from "./components/error/error.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReimbursementsComponent } from "./components/reimbursements/reimbursements.component";

// Service
// import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard/:id",
    component: DashboardComponent
    //canActivate: [AuthGuardService]
  },
  {
    path: "reimbursements/page/:id",
    component: ReimbursementsComponent
    //canActivate: [AuthGuardService]
  },
  { path: "", component: HomeComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
