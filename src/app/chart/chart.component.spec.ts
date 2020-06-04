import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component,Injectable} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';
import { GlobalService} from '../service/global.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

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
class MockProductService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
   
  ]);
  getProductUrl(): BehaviorSubject<Product[]> {
    return this.products;
  }

  addProduct(product: Product) {
    let arrayProducts = this.products.getValue();
    arrayProducts.push(product);
    this.products.next(arrayProducts);
  }
}
xdescribe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let MockProductService: Partial<GlobalService>;
  let httpClient: Partial<HttpClient>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
     // schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChartComponent ],
      providers: [
        {provide: Router, useVlue: RouterMock},{provide: GlobalService, useValue: MockProductService},{provide:HttpClient, useValue:httpClient}] ,
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
