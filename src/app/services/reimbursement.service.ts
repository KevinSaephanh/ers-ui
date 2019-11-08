import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reimbursement } from "../models/Reimbursement";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ReimbursementService {
  private BASE_URL = "http://localhost:8080/ers/reimbursements";

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getAll(): Observable<Reimbursement[]> {
    const pageNum = this.route.snapshot.paramMap.get(":id");
    return this.http.get<Reimbursement[]>(`${this.BASE_URL}/page=${pageNum}`);
  }

  getUserReimbs(): Observable<Reimbursement[]> {
    const id = this.route.snapshot.paramMap.get(":id");
    return this.http.get<Reimbursement[]>(`${this.BASE_URL}/user/${id}`);
  }

  add(reimb): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.BASE_URL, reimb);
  }

  update(reimb): Observable<Reimbursement> {
    return this.http.put<Reimbursement>(`${this.BASE_URL}/id`, reimb);
  }
}
