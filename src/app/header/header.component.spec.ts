import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { GlobalService } from '../service/global.service'
let userServiceStub: Partial<GlobalService>;
let httpcl:Partial<HttpClient>;
class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  } 
}
fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        
      ],
      schemas: [],
      declarations: [ HeaderComponent ],
      providers: [ { provide: GlobalService, useValue: userServiceStub },
        {provide:Router, useValue:RouterMock}, {provide:HttpClient,useValue:httpcl}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component named HeaderComponent', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Capstone Project'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Capstone Project');
  });
});
