import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayonaraComponent } from './sayonara.component';

describe('SayonaraComponent', () => {
  let component: SayonaraComponent;
  let fixture: ComponentFixture<SayonaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayonaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayonaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
