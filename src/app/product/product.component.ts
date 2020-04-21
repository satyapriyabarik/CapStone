import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from '../validators/custom.validators';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../service/global.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
title="Add New Product";
products: FormGroup;
  productList;
  success;
  timer;
  newProduct;
  addedProduct;
  constructor(private router:Router, fb: FormBuilder, private http: HttpClient, private userdata: GlobalService) {
    this.products = fb.group({
      "productName": ['', Validators.required],
      "productQuantity": ['', [Validators.required, CustomValidators.numberValidator]],
      "brand":[''],
      "model":[''],
      "energy":[''],
      "capacity":[''],
      "consumption":[],
      "installationtype":[''],
      "color":[''],
      "material":[],
      "components":[''],
      "dateavailable":[''],
      "warranty":[''],
      "description":[''],
      "price": ['']
    });
  }

  ngOnInit() {
    this.success = false;
  }
  //function to send object to parent app component.
  addProduct(event) {
    //Payload for post
    this.newProduct = {
      "id": Math.floor(Math.random() * 100) + 1,
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
       "addedBy": this.userdata.currentUser,
       "rate":0
    }
    this.http.post(this.userdata.productApi, this.newProduct).subscribe(data => {
      this.addedProduct = data;
     // this.userdata.products.name = this.addedProduct.productName;
      //this.userdata.products.quantity = this.addedProduct.quantity;
      
    })
    this.success = true;
    this.timer = setTimeout(this.reset.bind(this), 2000);
    alert('Product Added to list successfully');
    this.router.navigate(["/home"]);
  }
  //code for refresh the input fields for second entry
  reset() {
    this.products.reset();
    this.success = false;
    this.router.navigate(["/home"]);
  }

}
