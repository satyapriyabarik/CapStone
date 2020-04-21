import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productDetails={}
productId;
productName;
brand;
model;
ratings;
capacity;
consumption;
installationtype;
color;
material;
components;
dateofavailable;
warranty;
quantity;
price;
addedby;
addedon;
description;

  constructor(private productService: GlobalService) { }

  ngOnInit() {
  this.productDetails = this.productService.productDetails;
  console.log(this.productDetails)
  this.productId = this.productService.productDetails.id;
  this.productName= this.productService.productDetails.productName
  this.brand = this.productService.productDetails.brandName;
  this.model = this.productService.productDetails.modelName;
  this.ratings = this.productService.productDetails.energyRatings;
  this.capacity = this.productService.productDetails.capacity;
  this.consumption = this.productService.productDetails.annualConsumption;
  this.installationtype = this.productService.productDetails.installationType;
  this.color = this.productService.productDetails.color;
  this.material = this.productService.productDetails.material;
  this.components = this.productService.productDetails.components;
  this.dateofavailable = this.productService.productDetails.firstavailableDate;
  this.warranty = this.productService.productDetails.warranty;
  this.quantity = this.productService.productDetails.quantity;
  this.price = this.productService.productDetails.price;
  this.addedby = this.productService.productDetails.addedBy;
  this.addedon = this.productService.productDetails.addedOn;
  this.description = this.productService.productDetails.usability;

  }

}
