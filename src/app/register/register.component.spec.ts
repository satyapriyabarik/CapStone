import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule, HttpClient } from '@angular/common/http';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
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
    const formBuilderStub = () => ({ group: object => ({}) });
    const alertServiceStub = () => ({
      success: (string, arg) => ({}),
      error: error => ({})
    });
    const authenticationServiceStub = () => ({ currentUserValue: {} });
    const userServiceStub = () => ({
      register: value => ({ pipe: () => ({ subscribe: f => f({}) }) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes([]),HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ RegisterComponent ],
      providers:[{provide: Router, useClass: RouterMock}, FormBuilder, AlertService, AuthenticationService, UserService,HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'User Registration Form'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('User Registration Form');
  });
});
