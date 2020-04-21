import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface Rate {
  id: Number,
  productName: String,
  brandName: String,
  modelName: String,
  energyRatings: String,
  capacity: String,
  annualConsumption: String,
  installationType: String,
  color: String,
  material: String,
  components: String,
  firstavailableDate: String,
  warranty: String,
  quantity: Number,
  price: Number,
  addedBy: String,
  addedOn: String,
  usability: String,
  rate: Number
}
@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.css']
})
export class CustomChartComponent implements OnInit {
 title="Customize Product Ratings";
 products;
 payload;
 blankload;
 resp;
 public form: {
   rates: Rate[];
 };
 constructor(private router: Router, private httpClient: HttpClient, private globalService: GlobalService) {

   this.form = {
     rates: []
   };
   this.addRate();
 }
 public addRate(): void {
   this.getProducts().subscribe(res => {
     this.products = res;
     this.products.forEach(element => {
       console.log("Elements:", element)
       this.form.rates.push(element);
     });

   });
 }
 public updateRates(form: any): void {
   let i = 0
   this.payload = this.form.rates;
   for (i = 0; i < this.payload.length; i++) {
     this.httpClient.put(this.globalService.productApi + "/" + this.payload[i].id, this.payload[i]).subscribe(data => {
       this.resp = data;
     })

   }
   alert('You have successfully modified the product ratings')
   this.router.navigate(['./home']);
 }
 ngOnInit() {

 }
 getProducts() {
   return this.httpClient.get(this.globalService.productApi);
 }
 backBtnClick(){
   this.router.navigate(['./home']);
 }
}
