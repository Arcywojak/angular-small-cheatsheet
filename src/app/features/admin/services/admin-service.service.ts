import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getAdminData(): Observable<any> {
    return of(["ADMIN", "DATA"]);
  }

  getHttpData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
