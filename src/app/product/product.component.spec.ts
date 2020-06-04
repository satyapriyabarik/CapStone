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
      "id": 36,
      "productName": "Air Conditioner",
      "quantity": 5,
      "price": 1236,
      "brandName": "Symphony",
      "modelName": "sm23",
      "energyRatings": "4 Star",
      "capacity": "2 ton",
      "annualConsumption": "3456 Watt",
      "installationType": "Demo",
      "color": "Blue",
      "material": "Silver",
      "components": "Air pollution  guard",
      "firstavailableDate": "2020-01-02",
      "warranty": "2 years manufacturer warranty",
      "usability": "Best product to heat the summer with in budget.",
      "addedOn": "2020-03-31T08:25:14.105Z",
      "addedBy": "Gaurav Jha",
      "rate": 5
    },
    {
      "id": 43,
      "productName": "Washing Machine",
      "quantity": 12,
      "price": 123,
      "brandName": "Samsung",
      "modelName": "Sm1234",
      "energyRatings": "5 star",
      "capacity": "234 ltr",
      "annualConsumption": "2345 watt",
      "installationType": "free",
      "color": "Silver",
      "material": "Steel",
      "components": "stand and cover",
      "firstavailableDate": "2020-04-09",
      "warranty": "2 years manufacturer warranty",
      "usability": "Washing is great experience make it easy and quick through this",
      "addedOn": "2020-04-01T14:03:34.900Z",
      "addedBy": "Samik Gupta",
      "rate": 9
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
fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: GlobalService;
  beforeEach(async(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const globalServiceStub = () => ({ currentUser: {}, productApi: {} });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,HttpClientModule  ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductComponent ],
      providers:[ProductComponent,{provide: Router, useClass: RouterMock}, HttpClient, { provide: GlobalService, useClass: MockProductService }, FormBuilder]
    })
    .compileComponents();
    component = TestBed.get(ProductComponent);
    productService = TestBed.get(GlobalService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create a component named as ProductComponent', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Add New Product'`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Add New Product');
  });
  it(`should render a label as  Product Name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[0].textContent).toEqual('Product Name:');
  });
  it(`should render a label as  Quantity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Quantity:');
  });
  it(`should render a label as  Price`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[2].textContent).toEqual('Price:');
  });
  it(`should render a label as  Brand Name `, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[3].textContent).toEqual('Brand Name:');
  });
  it(`should render a label as  Model Name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[4].textContent).toEqual('Model Name:');
  });


  it(`should render a label as Energy Efficiency`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[5].textContent).toEqual('Energy Efficiency:');
  });
  it(`should render a label as  Capacity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[6].textContent).toEqual('Capacity:');
  });
  it(`should render a label as  Annual Energy Consumption`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[7].textContent).toEqual('Annual Energy Consumption:');
  });
  it(`should render a label as  Installation Type`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[8].textContent).toEqual('Installation Type:');
  });


  it(`should render a label as  Color`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[9].textContent).toEqual('Color:');
  });
  it(`should render a label as  Material`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[10].textContent).toEqual('Material:');
  });
  it(`should render a label as  Components included`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[11].textContent).toEqual('Components included:');
  });
  it(`should render a label as  Date of first available`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[12].textContent).toEqual('Date of first available:');
  });
  it(`should render a label as  Warranty`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[13].textContent).toEqual('Warranty:');
  });
  it(`should render a label as  Description`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[14].textContent).toEqual('Description:');
  });

  it(`should render a button as  Add Product`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button')[0].textContent).toEqual('Add Product');
  });
  it(`should render a button as  Cancel`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button')[1].textContent).toEqual('Cancel');
  });
});
