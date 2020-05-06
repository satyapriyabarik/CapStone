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
import { HttpClientModule} from '@angular/common/http';

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
xdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Products Overview'`, () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Products Overview');
  });
  it(`should render a link button as  Add New Product`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toEqual('Add New Product');
  });
  it(`should render a button as  Edit`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Edit');
  });
  it(`should render a button as  Delete`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Delete');
  });
  it(`should render a link button as  View Details`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toEqual('View Details');
  });
});
