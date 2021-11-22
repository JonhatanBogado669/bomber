import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Solicitante, Collection, Entity } from '../models/solicitante'

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  private apiURL = "http://bombero.test/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Collection> {
    return this.httpClient.get<Collection>(this.apiURL + '/solicitante/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(solicitante:Solicitante): Observable<Solicitante> {
    return this.httpClient.post<Solicitante>(this.apiURL + '/solicitante/', JSON.stringify(solicitante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id:number): Observable<Entity> {
    return this.httpClient.get<Entity>(this.apiURL + '/solicitante/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id:number, solicitante:Solicitante): Observable<Solicitante> {
    return this.httpClient.put<Solicitante>(this.apiURL + '/solicitante/' + id, JSON.stringify(solicitante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id:number){
    return this.httpClient.delete<Solicitante>(this.apiURL + '/solicitante/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
