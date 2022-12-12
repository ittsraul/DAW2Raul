import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul5Component } from './raul5.component';

describe('Raul5Component', () => {
  let component: Raul5Component;
  let fixture: ComponentFixture<Raul5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
