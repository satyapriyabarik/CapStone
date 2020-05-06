import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailsComponent } from './product-details.component';
xdescribe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  class RouterMock {
    navigateByUrl(url: string) {
      return url;
    }
    serializeUrl(url: string) {
       return url;
    } 
  }
  beforeEach(() => {
    const globalServiceStub = () => ({
      productDetails: {
        id: {},
        productName: {},
        brandName: {},
        modelName: {},
        energyRatings: {},
        capacity: {},
        annualConsumption: {},
        installationType: {},
        color: {},
        material: {},
        components: {},
        firstavailableDate: {},
        warranty: {},
        quantity: {},
        price: {},
        addedBy: {},
        addedOn: {},
        usability: {}
      }
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductDetailsComponent],
      providers: [{ provide: GlobalService, useFactory: globalServiceStub }]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
