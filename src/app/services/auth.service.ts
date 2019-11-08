import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = "http://localhost:8080/ers/users";

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem("token");
  }

  removeToken(): void {
    localStorage.removeItem("token");
  }

  isTokenExpired(token): boolean {
    const date = new Date();
    const currentTime = date.getTime();

    // Check if current time is equal to/exceeds token expiration date
    if (currentTime >= token.exp) return true;
    else return false;
  }

  getUser(): any {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwt_decode(token);
    return decoded;
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/signup`, user);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/login`, {
      username,
      password
    });
  }
}
