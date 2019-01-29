import{ InMemoryDbService } from 'angular-in-memory-web-api';

export class Customer_webAPI implements InMemoryDbService{
    createDb(){

        let customerData = [
            {custID:1002, name:'Raj', city:'pune', contact:'8519912122'},
            {custID:1222, name:'Sunil', city:'Mumbai', contact:'8519912122'},
            {custID:1344, name:'Sanjana', city:'Bengloru', contact:'8519912122'},
            {custID:1488, name:'Sameer', city:'Mumbai', contact:'8519912122'},
        ];
        return {customers:customerData};
    }
    
}