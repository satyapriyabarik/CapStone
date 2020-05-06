import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ProductModificationComponent } from './product-modification.component';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../service/global.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product} from '../models/product';
class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  } 
}

class MockProductService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    { 
      "id":12,
      "productName": "Air Conditioner",
      "brandName": "Symphony",
      "modelName": "Sxzs12",
      "price": 1234
      
    },
    {
      "id": 21,
      "productName": "Washing Machine",
      "brandName": "Samsung",
      "modelName": "Sm1234",
      "price": 2345
       }
  ]);
  getProducts(): BehaviorSubject<Product[]> {
    return this.products;
  }

  addProduct(product: Product) {
    let arrayProducts = this.products.getValue();
    arrayProducts.push(product);
    this.products.next(arrayProducts);
  }
}
xdescribe('ProductModificationComponent', () => {
  let component: ProductModificationComponent;
  let fixture: ComponentFixture<ProductModificationComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductModificationComponent ],
      providers:[HttpClient, ProductModificationComponent, {provide: Router, useClass: RouterMock},{ provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Modify Product'`, () => {
    const fixture = TestBed.createComponent(ProductModificationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Modify Product');
  });
});
