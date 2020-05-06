import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AboutComponent } from '../about/about.component';
import { GlobalService } from '../service/global.service'
class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  } 
}
xdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
        
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ HeaderComponent ,AboutComponent],
      providers:[{provide:GlobalService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Capstone Project'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Capstone Project');
  });
});
