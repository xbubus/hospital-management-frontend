import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BedService {
  private readonly _baseUrl: string = environment.backendUrl;
  constructor(private readonly http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(`${this._baseUrl}/bed`);
  }
  find(name:string): Observable<any> {
    return this.http.get(`${this._baseUrl}/bed?name=${name}`);
  }
}
