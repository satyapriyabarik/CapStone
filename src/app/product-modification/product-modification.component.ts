import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from '../validators/custom.validators';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-modification',
  templateUrl: './product-modification.component.html',
  styleUrls: ['./product-modification.component.css']
})
export class ProductModificationComponent implements OnInit {
  title="Modify Product"
  products: FormGroup;
  productList;
  success;
  timer;
  payload;
  constructor(private fb: FormBuilder, private http: HttpClient, public productData: GlobalService, private router: Router) {

  }

  ngOnInit() {
    this.products= this.productData.isEditTrue == false ?
    this.fb.group({
      "productName": ['', Validators.required],
      "productQuantity": ['', [Validators.required, CustomValidators.numberValidator]],
      "brand":[''],
      "model":[''],
      "energy":[''],
      "capacity":[''],
      "consumption":[''],
      "installationtype":[''],
      "color":[''],
      "material":[''],
      "components":[''],
      "dateavailable":[''],
      "warranty":[''],
      "description":[''],
      "price": ['']
    }):
    this.fb.group({
      "productName": [this.productData.productDetails.productName],
      "productQuantity": [this.productData.productDetails.quantity],
      "brand":[this.productData.productDetails.brandName],
      "model":[this.productData.productDetails.modelName],
      "energy":[this.productData.productDetails.energyRatings],
      "capacity":[this.productData.productDetails.capacity],
      "consumption":[this.productData.productDetails.annualConsumption],
      "installationtype":[this.productData.productDetails.installationType],
      "color":[this.productData.productDetails.color],
      "material":[this.productData.productDetails.material],
      "components":[this.productData.productDetails.components],
      "dateavailable":[this.productData.productDetails.firstavailableDate],
      "warranty":[this.productData.productDetails.warranty],
      "description":[this.productData.productDetails.usability],
      "price": [this.productData.productDetails.price]
    })
    this.productData.isProductFlag=false;

  }
   updateProduct(post) {
    this.payload= {
      "id": this.productData.productDetails.id,
      "productName": this.products.get('productName').value,
      "quantity": this.products.get('productQuantity').value,
      "price": this.products.get('price').value,
      "brandName": this.products.get('brand').value,
      "modelName": this.products.get('model').value,
      "energyRatings": this.products.get('energy').value,
      "capacity": this.products.get('capacity').value,
      "annualConsumption": this.products.get('consumption').value,
      "installationType": this.products.get('installationtype').value,
      "color": this.products.get('color').value,
      "material": this.products.get('material').value,
      "components": this.products.get('components').value,
      "firstavailableDate": this.products.get('dateavailable').value,
      "warranty":this.products.get('warranty').value,
      "usability": this.products.get('description').value,
       "addedOn": new Date(),
       "addedBy": this.productData.currentUser,
       "rate":this.productData.productDetails.rate
    }
    this.http.put(this.productData.productApi+"/"+this.productData.productDetails.id,this.payload)
      .subscribe(response => {
       
      });
      alert('Product data successfully updated ')
   this.router.navigate(["/home"]);
  }
  cancelBtnClick() {
   // this.reset()
    this.router.navigate(["/home"]);
  }
  reset() {
     this.products.reset();
    this.success = false;
  }
}
