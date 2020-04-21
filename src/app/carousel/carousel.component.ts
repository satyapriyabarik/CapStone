import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
title="Carousel";
products;
constructor(private router:Router, private httpClient:HttpClient, private globalService:GlobalService){}
 ngOnInit() {
   this.getProductUrl().subscribe(res =>{
     this.products = res;
   })
 }
 gotoCustomize(event){
   this.router.navigate(['./customChart']);
 }
 getProductUrl(){
   return this.httpClient.get(this.globalService.productApi)
 }
 
}
