import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = "http://localhost:8080/ers/users";

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem("token");
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/signup`;
    console.log(url);
    return this.http.post<User>(url, user);
  }

  login(username: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/login`;
    console.log(url);
    return this.http.post<User>(url, { username, password });
  }
}
