import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component,} from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
let MockProductService: Partial<GlobalService>;
let httpcl:Partial<HttpClient>;
let ROOT_URl='http://localhost:3000';
let httpMock: HttpTestingController;
@Component({
  selector: 'app-chart',
  template: ''
})
class fakeChart{
  
}
 
class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  } 
}


xdescribe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ CarouselComponent, fakeChart],
      providers: [{provide: HttpClient, useValue: httpcl},
                  {provide: Router, useVlue: RouterMock}, 
                  { provide: GlobalService, useValue: MockProductService }
                  
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  httpMock = TestBed.get(HttpTestingController);
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Carousel'`, () => {
    const fixture = TestBed.createComponent(CarouselComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Carousel');
  });
  it(`should render a Close button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Close');
  });
});
