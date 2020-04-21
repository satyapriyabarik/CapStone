import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app.routes.module';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './component/alert.component';
import { UserService } from './service/user.service';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { ProductModificationComponent } from './product-modification/product-modification.component'
import {ProductComponent} from './product/product.component';
import { BehaviorSubject } from 'rxjs';
import { Product} from './models/product';
import { Router } from '@angular/router';
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
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule.withRoutes([]),
          AppRoutingModule
      ],
      declarations: [ProductComponent,
       LoginComponent, AppComponent, ProductModificationComponent ,HeaderComponent, AlertComponent, AboutComponent, HomeComponent, RegisterComponent
      ],
      providers: [AppComponent,{ provide: UserService },{provide: Router, useClass: RouterMock}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'capStone'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('capStone');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('capStone app is running!');
  // });
});
