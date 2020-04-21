import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarouselComponent } from './carousel.component';
import { AppRoutingModule } from '../app.routes.module';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { BehaviorSubject } from 'rxjs';
import { Product} from '../models/product';
import {AboutComponent } from '../about/about.component';
import {HomeComponent } from '../home/home.component';
import {RegisterComponent } from '../register/register.component';
import {LoginComponent } from '../login/login.component';
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
    console.log(arrayProducts);
  }
}
describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
 
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppRoutingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ CarouselComponent, AboutComponent, HomeComponent,RegisterComponent, LoginComponent ],
      providers: [CarouselComponent,{provide: Router, useClass: RouterMock}, { provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Carousel'`, () => {
    const fixture = TestBed.createComponent(CarouselComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Carousel');
  });
  it(`should render a Close button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Close');
  });
});
