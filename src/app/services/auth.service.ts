import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = "http://localhost:8080/ers";

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem("token");
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/signup`;
    return this.http.post<User>(url, user);
  }

  login(username: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { username, password });
  }
}
