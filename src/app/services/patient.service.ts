import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly _baseUrl: string = environment.backendUrl;
  constructor(private readonly http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(`${this._baseUrl}/patient`);
  }

  find(patinent:string): Observable<any> {
    return this.http.get(`${this._baseUrl}/patient/${patinent}`);
  }
  create(data:object): Observable<any> {
    return this.http.post(`${this._baseUrl}/patient`,data);
  }
  delete(patinent:string): Observable<any> {
    return this.http.delete(`${this._baseUrl}/patient/${patinent}`);
  }
  patch(patient:string,data:object): Observable<any> {
    return this.http.put(`${this._baseUrl}/patient/${patient}`,data); //powinno byc patch ale narazie put zostaje
  }



  onDelete(id:string): boolean {
    if (confirm('Are you sure ?')) {
      this.delete(id).subscribe(
        response => {
          //tu usuwac z tablicy patiens usuniety obiekt i nie robic redirect w html
          //a nie lepiej odebrac nowa tablice z backendu?
          //tak jest szybciej, o tak:


        },

        error => {
        }
      );
      return true
    }
    return false
  }
}
