import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';
import { GlobalService} from '../service/global.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
let MockProductService: Partial<GlobalService>;
let httpcl:Partial<HttpClient>;
let ROOT_URl='http://localhost:3000';

@Component({
  selector: 'canvas',
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
fdescribe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
     // schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChartComponent ],
      providers: [{provide: HttpClient, useValue: httpcl},
        {provide: Router, useVlue: RouterMock}, 
        { provide: GlobalService, useValue: MockProductService }],
      imports:[ChartsModule]
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
