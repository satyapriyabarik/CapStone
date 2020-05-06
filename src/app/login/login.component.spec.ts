import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;
  class RouterMock {
    navigateByUrl(url: string) {
      return url;
    }
    serializeUrl(url: string) {
       return url;
    } 
  }
  beforeEach(async(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const activatedRouteStub = () => ({ snapshot: { queryParams: {} } });
    const formBuilderStub = () => ({ group: object => ({}) });
    const globalServiceStub = () => ({ userApi: {} });
    const alertServiceStub = () => ({ error: error => ({}) });
    const authenticationServiceStub = () => ({
      currentUserValue: {},
      login: (value, value1) => ({ pipe: () => ({ subscribe: f => f({}) }) })
    });
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ LoginComponent ],
      providers:[GlobalService, HttpClient, {provide: Router, useClass: RouterMock}, ActivatedRoute, FormBuilder, AlertService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Login'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Login');
  });
  it(`should render a label as Username`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Username');
  });
  it(`should render a label as  Password`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Password');
  });
  it(`should render a Login button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Login');
  });
  it(`should render a link as Resister`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toEqual('Register');
  });
});
