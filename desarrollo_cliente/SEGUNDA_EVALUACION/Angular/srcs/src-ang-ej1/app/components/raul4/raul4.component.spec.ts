import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raul4Component } from './raul4.component';

describe('Raul4Component', () => {
  let component: Raul4Component;
  let fixture: ComponentFixture<Raul4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raul4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raul4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
