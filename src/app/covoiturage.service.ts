import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { cov } from './cov';

@Injectable({
  providedIn: 'root'
})

export class CovoiturageService {

  private baseURL = "http://localhost:8083/covoiturages";
  private FURL = "";

  constructor(private httpClient: HttpClient) { }
  
  getCovoituragesList(): Observable<cov[]>{
    return this.httpClient.get<cov[]>(`${this.baseURL}`);
  }
  
  createCovoiturage(cov: cov): Observable<Object>{
    alert("Covoiturage saved ");
    
    return this.httpClient.post(`${this.baseURL}`, cov);
  }
  
  getCovoiturageById(id: number): Observable<cov>{
    return this.httpClient.get<cov>(`${this.baseURL}/${id}`);
  }

  updateCovoiturage(id: number, cov: cov): Observable<Object>{
   
    const confirmed = confirm("Updated Covoiturage !");
    if (confirmed) {
    return this.httpClient.put(`${this.baseURL}/${id}`, cov);
  } else {
    return new Observable<Object>();
  }
  }

  deleteCovoiturage(id: number): Observable<Object>{
    const confirmed = confirm("deleted Covoiturage !");
    if (confirmed) {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    } else {
      return new Observable<Object>();
    }
  }
  getCovoituragetByNom(nom: string): Observable<cov>{
    return this.httpClient.get<cov>(`${this.FURL}/${nom}`);
  }
}
