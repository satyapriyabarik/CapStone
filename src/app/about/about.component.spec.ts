import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
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
      declarations: [ AboutComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Product Management'`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Product Management');
  });

  it('should render title h3 tag', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Product Management');
  });
});
