import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scc19Component } from './scc19.component';

describe('Scc19Component', () => {
  let component: Scc19Component;
  let fixture: ComponentFixture<Scc19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scc19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Scc19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
