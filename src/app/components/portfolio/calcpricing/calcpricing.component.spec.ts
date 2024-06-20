import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcpricingComponent } from './calcpricing.component';

describe('CalcpricingComponent', () => {
  let component: CalcpricingComponent;
  let fixture: ComponentFixture<CalcpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcpricingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
