import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReimbursementService {
  private BASE_URL = "http://localhost:8080/ers/reimbursements";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.BASE_URL}/reimbursements`);
  }
}
