import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ProductModificationComponent } from './product-modification.component';
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
    }
  ]);
  getProducts(): BehaviorSubject<Product[]> {
    alert(this.products)
    return this.products;
  }

  addProduct(product: Product) {
    let arrayProducts = this.products.getValue();
    arrayProducts.push(product);
    this.products.next(arrayProducts);
  }
}
fdescribe('ProductModificationComponent', () => {
  let component: ProductModificationComponent;
  let fixture: ComponentFixture<ProductModificationComponent>;
  let productService: GlobalService;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ProductModificationComponent ],
      providers:[ ProductModificationComponent, {provide: Router, useClass: RouterMock},{ provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
    component = TestBed.get(ProductModificationComponent);
    productService = TestBed.get(GlobalService);
    component.ngOnInit();
  productService.productDetails = TestBed.inject(
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
    } 
  )
   // productService.productDetails = this.products;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component named ProductModificationComponent', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Modify Product'`, () => {
    const fixture = TestBed.createComponent(ProductModificationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Modify Product');
  });
});
