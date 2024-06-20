import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorambComponent } from './calculadoramb.component';

describe('CalculadorambComponent', () => {
  let component: CalculadorambComponent;
  let fixture: ComponentFixture<CalculadorambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadorambComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadorambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
