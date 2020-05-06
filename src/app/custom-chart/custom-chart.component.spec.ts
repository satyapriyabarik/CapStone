import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomChartComponent } from './custom-chart.component';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product} from '../models/product';
import {GlobalService} from '../service/global.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
xdescribe('CustomChartComponent', () => {
  let component: CustomChartComponent;
  let fixture: ComponentFixture<CustomChartComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,
         ReactiveFormsModule],
         schemas: [NO_ERRORS_SCHEMA],
      declarations: [ CustomChartComponent ],
      providers:[HttpClient, CustomChartComponent,{provide: Router, useClass: RouterMock},{ provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Customize Product Ratings'`, () => {
    const fixture = TestBed.createComponent(CustomChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Customize Product Ratings');
  });
  it(`should render a Update Rates button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Update Rates');
  });
});
