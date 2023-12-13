import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../models/appartement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
apartmentUrl ='http://localhost:3000/appartement'
  constructor(private http: HttpClient ) {}

  getnumber(){
    console.log("salut 4 sae9")
  }
  getappartment():Observable<Appartement[]>{
    return this.http.get<Appartement[]>(this.apartmentUrl)
  }
}
