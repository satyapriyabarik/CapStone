import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';

@Injectable()
export class GlobalService {
  users={};
  currentUser ='Guest';
  profilesDetails={};
  updatedPayload?={};
  productDetails={
    id:Number,
    productName:String,
    brandName: String,
    modelName:String,
    energyRatings:String,
    capacity:String,
    annualConsumption:String,
    installationType:String,
    color :String,
    material:String,
    components:String,
    firstavailableDate:String,
    warranty:String,
    quantity:Number,
    price:Number,
    addedBy:String,
    addedOn:String,
    usability:String,
    rate:Number,
  };
  isEditTrue :boolean = false;
  isProductFlag :boolean = false;
  createdBy:String;
  productId?=null;
  constructor(private http: HttpClient) {
    
   }
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
  productApi='http://my-json-server.typicode.com/satyapriyabarik/productData/products';
  //'http://localhost:3000/products';
  //userApi ='https://jsonplaceholder.typicode.com/users';
  userApi = 'http://my-json-server.typicode.com/satyapriyabarik/productData/users'
  //'http://localhost:3000/users';
  ratingApi='http://my-json-server.typicode.com/satyapriyabarik/productData/toprated';
  //'http://localhost:3000/toprated'
 /* getDateFormat(date,format){
    let formated_date = this.datePipe.transform(date,format);
    return formated_date;
  }*/
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApi);
  }

  addProduct(product: Product) {
    return this.http.post(this.productApi, product, this.httpOptions);
  }
  deleteProductStock(){
return this.http.delete(this.productApi + '/' + this.productId)
  }
  updateProductStock(){
  return  this.http.put(this.productApi+"/"+this.productDetails.id,this.updatedPayload)

  }
  getProductUrl(){
    return this.http.get(this.productApi);
   }
  
}
