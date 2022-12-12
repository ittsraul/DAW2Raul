import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul2Component } from './raul2.component';

describe('Raul2Component', () => {
  let component: Raul2Component;
  let fixture: ComponentFixture<Raul2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
