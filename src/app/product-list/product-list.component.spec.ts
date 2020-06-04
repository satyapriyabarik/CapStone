import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BehaviorSubject} from 'rxjs';
import { Product} from '../models/product';
//import { HttpClientModule} from '@angular/common/http';

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
fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: GlobalService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,Ng2SearchPipeModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductListComponent ],
      providers: [ ProductListComponent, {provide: Router, useClass: RouterMock},{ provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
    component = TestBed.get(ProductListComponent);
    productService = TestBed.get(GlobalService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component named ProductListComponent', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Products Overview'`, () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Products Overview');
  });
  it(`should render a link button as  Add New Product`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[0].textContent).toEqual('Add New Product');
  });
  it(`should render a button as  Edit`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button span')[0].textContent).toEqual('Edit');
  });
  it(`should render a button as  Delete`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button span')[1].textContent).toEqual('Delete');
  });
  it(`should render a link button as  View Details`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[1].textContent).toEqual('View Details');
  });
  // it('should not have products list after construction', () => {
  //   expect(component.allProductDetails).toBeTruthy();
  // });

  it('should have products list after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.allProductDetails.length).toEqual(2);
  });
});
