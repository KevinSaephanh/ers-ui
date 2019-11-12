import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbImgServiceService {

  constructor(private httpClient: HttpClient) { }

  async reimbImgService(reimbImg: File){
    const url = 'http://localhost:8080/ers/SSSUPloader';

    const data = await this.httpClient.post(url, reimbImg).toPromise();

    return JSON.parse(JSON.stringify(data));

  }
}
