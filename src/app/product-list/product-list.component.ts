import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title="Products Overview";

constructor(
  public userDat: GlobalService,
  private router: Router
) { }
allProductDetails;
searchProduct;
flag;
ngOnInit() {
  this.userDat.getProducts().subscribe(response => {
    this.allProductDetails = response;
    this.allProductDetails.reverse();
    this.flag = 0;
  })

}

goToAddProducct(){
  this.router.navigate(['./product']);
}

goToModifyProducct(post){
  this.userDat.productDetails = post;
  this.userDat.isEditTrue = true;
  this.userDat.isProductFlag = true; 
  this.router.navigate(['./edit']);
}
goToProductDetails(data){
  this.userDat.productDetails = data;
  this.userDat.isProductFlag = true; 
  this.router.navigate(['./productDetails']);
}
deleteUser(post) {
  let userconfirm = confirm('Are you sure to delete  '+ post.productName + ' from products list?');
  if (userconfirm == true) {
  this.userDat.productId = post.id;  
  this.userDat.deleteProductStock()
      .subscribe(response => {
        let index = this.allProductDetails.indexOf(post);
        this.allProductDetails.splice(index, 1);
        alert('Details of this product: '+ post.productName + ' permanently deleted');
        this.userDat.productId = null;
      });
  } else {
   return false;
  }
}
}
