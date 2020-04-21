import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalService } from '../service/global.service';
import { BehaviorSubject } from 'rxjs';
import { Product} from '../models/product';
import { HttpClientModule,HttpClient } from '@angular/common/http';
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
describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ChartsModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChartComponent ],
      providers: [HttpClient,ChartComponent,{ provide: GlobalService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Chart'`, () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chart');
  });
});
