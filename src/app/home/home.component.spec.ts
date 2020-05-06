import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app.routes.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { AboutComponent } from '../about/about.component';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { RegisterComponent } from '../register/register.component';
import {LoginComponent } from '../login/login.component';
import {ProductComponent } from '../product/product.component';
import { ProductModificationComponent } from '../product-modification/product-modification.component';

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  class RouterMock {
    navigateByUrl(url: string) {
      return url;
    }
    serializeUrl(url: string) {
       return url;
    } 
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppRoutingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ HomeComponent, ProductListComponent, CarouselComponent,
         AboutComponent, RegisterComponent, LoginComponent, ProductComponent, ProductModificationComponent],
      providers: [
        {
          provide: AuthenticationService,
        },
        { provide: UserService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Home'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Home');
  });
});
