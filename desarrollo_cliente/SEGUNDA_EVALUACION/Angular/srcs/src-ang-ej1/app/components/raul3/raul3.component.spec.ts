import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul3Component } from './raul3.component';

describe('Raul3Component', () => {
  let component: Raul3Component;
  let fixture: ComponentFixture<Raul3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
