import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { cov } from './cov';
import { reservation } from './reservation';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})

export class CovoiturageService {

  private baseURL = "http://localhost:8083/driver/covoiturages";
  private FURL = "http://localhost:8083/driver/";
  private RURL = "http://localhost:3002/participation";
  private log = "http://localhost:9898/auth/all";

  constructor(private httpClient: HttpClient) { }
  
  getCovoituragesList(): Observable<cov[]>{
    return this.httpClient.get<cov[]>(`${this.baseURL}`);
  }

  getResrvationsList(): Observable<cov[]>{
    return this.httpClient.get<cov[]>(`${this.RURL}`);
  }

  getReservationsCount(id: number): Observable<Number> {
    return this.httpClient.get<Number>(`${this.RURL}Count/${id}`);
  }
  
  getReservationsEtat(): Observable<cov[]> {
    return this.httpClient.get<cov[]>(`${this.RURL}Etat`);
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

  deleteReservation(id: number): Observable<Object>{
    const confirmed = confirm("deleted reservation !");
    if (confirmed) {
      return this.httpClient.delete(`${this.RURL}/${id}`);
    } else {
      return new Observable<Object>();
    }
  }
  getCovoituragetByNom(nom: string): Observable<cov>{
    return this.httpClient.get<cov>(`${this.FURL}/${nom}`);
  }

  counts(): Observable<cov>{
    return this.httpClient.get<cov>(`${this.FURL}count`);
  }
  counts2(): Observable<reservation>{
   return this.httpClient.get<reservation>(`${this.RURL}Count`);
  }
  counts3(): Observable<reservation>{
    return this.httpClient.get<reservation>(`${this.RURL}AnnuledCount`);
    }
 getUsersList(): Observable<user[]>{
  return this.httpClient.get<user[]>(`${this.log}`);
}

sendEmail(queryParams: string): Observable<any> {
  // Append the query parameters to the base URL
  const url = `http://localhost:8083/driver/SendEmail?${queryParams}`;
  return this.httpClient.post(url, null);
}


}
