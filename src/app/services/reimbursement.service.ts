import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reimbursement } from "../models/Reimbursement";

@Injectable({
  providedIn: "root"
})
export class ReimbursementService {
  private BASE_URL = "http://localhost:8080/ers/reimbursements";

  constructor(private http: HttpClient) {}

  getAll(page: any): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(`${this.BASE_URL}/page=${page}`);
  }

  getUserReimbs(id: any): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(`${this.BASE_URL}/user/${id}`);
  }

  add(reimb): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.BASE_URL, reimb);
  }

  update(reimb): Observable<Reimbursement> {
    return this.http.put<Reimbursement>(`${this.BASE_URL}/${reimb.id}`, reimb);
  }
}
