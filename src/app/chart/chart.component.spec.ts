import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';


xdescribe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
     // schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChartComponent ],
      //providers: [HttpClient,ChartComponent,{ provide: GlobalService, useClass: MockProductService }]
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
