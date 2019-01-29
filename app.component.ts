import { Component } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { CustomerService } from 'src/app/customer.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClientMethodsDemoA7-Accessing customer Data from WEB-API';
  
 // customersdetails:Customer[];
  dataSaved = false;
  customerForm:FormGroup;
  allCustomerInfo:Observable<Customer[]>;

  constructor(private formBuilder:FormBuilder , private custService:CustomerService){}

  ngOnInit(){
    this.customerForm = this.formBuilder.group({
      custID:['',[Validators.required]],
      name:['',[Validators.required]],
      city:['',[Validators.required]],
      contact:['',[Validators.required]]
    });
    this.getCustomersdetails();
  }
  onFormSubmit(){
    this.dataSaved=false;
    let customer= this.customerForm.value;
    this.insertCustRecords(customer);
    this.customerForm.reset();
  }

  insertCustRecords(customer:Customer){
    this.custService.postCustomerDataintoAPI(customer).subscribe(cust=>{
      this.dataSaved=true;
      this.getCustomersdetails();
    })
  }

  getCustomersdetails(){
    this.allCustomerInfo = this.custService.getCustomerfromAPI();
    
  }
}
