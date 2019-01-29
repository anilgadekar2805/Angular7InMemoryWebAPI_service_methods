import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Customer} from './Customer';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerURL = "/api/customers";
  constructor(private http:HttpClient) { }
  
  //post customer Data
  postCustomerDataintoAPI(customerData:Customer):Observable<Customer>{
    
    let httpHeaders = new HttpHeaders()
    .set('content-Type','application/Json');
    let options = {
      headers:httpHeaders
    };

    return this.http.post<Customer>(this.customerURL, customerData, options);
   }

  //http get method defined
  getCustomerfromAPI():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerURL);
  }
}
