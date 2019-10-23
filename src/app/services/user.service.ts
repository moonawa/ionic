import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  envoi(transaction){
    const headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/ajout/transaction";

    const formData: FormData= new FormData();
     formData.append('ClientEmetteur', transaction.ClientEmetteur);
     formData.append('TelephoneEmetteur', transaction.TelephoneEmetteur);
     formData.append('NciEmetteur', transaction.NciEmetteur);
     formData.append('Montant', transaction.Montant);
     formData.append('ClientRecepteur', transaction.ClientRecepteur);
     formData.append('TelephoneRecepteur', transaction.TelephoneRecepteur);
     return this.http.post(host, formData, {headers : headers});

   }
}
