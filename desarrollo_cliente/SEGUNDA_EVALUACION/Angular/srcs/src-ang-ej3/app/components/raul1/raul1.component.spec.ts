import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul1Component } from './raul1.component';

describe('Raul1Component', () => {
  let component: Raul1Component;
  let fixture: ComponentFixture<Raul1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
