import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
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
xdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  class RouterMock {
    navigateByUrl(url: string) {
      return url;
    }
    serializeUrl(url: string) {
       return url;
    } 
  }
  beforeEach(async(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const globalServiceStub = () => ({ currentUser: {}, productApi: {} });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,HttpClientModule  ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductComponent ],
      providers:[{provide: Router, useClass: RouterMock}, HttpClient, { provide: GlobalService, useClass: MockProductService }, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Add New Product'`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Add New Product');
  });
  it(`should render a label as  Product Name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Product Name');
  });
  it(`should render a label as  Quantity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Quantity');
  });
  it(`should render a label as  Price`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Price');
  });
  it(`should render a label as  Brand Name `, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Brand Name');
  });
  it(`should render a label as  Model Name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Model Name');
  });
  it(`should render a button as  Add Product`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Add Product');
  });
  it(`should render a button as  Cancel`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Cancel');
  });
});
