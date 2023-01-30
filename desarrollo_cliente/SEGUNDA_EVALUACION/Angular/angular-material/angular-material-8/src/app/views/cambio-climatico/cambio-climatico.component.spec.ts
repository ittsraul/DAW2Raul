import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioClimaticoComponent } from './cambio-climatico.component';

describe('CambioClimaticoComponent', () => {
  let component: CambioClimaticoComponent;
  let fixture: ComponentFixture<CambioClimaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioClimaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioClimaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
