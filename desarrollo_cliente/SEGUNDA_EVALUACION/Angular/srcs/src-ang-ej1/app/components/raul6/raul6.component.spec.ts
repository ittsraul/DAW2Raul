import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul6Component } from './raul6.component';

describe('Raul6Component', () => {
  let component: Raul6Component;
  let fixture: ComponentFixture<Raul6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
