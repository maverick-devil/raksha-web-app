import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirRegistrationComponent } from './fir-registration.component';

describe('FirRegistrationComponent', () => {
  let component: FirRegistrationComponent;
  let fixture: ComponentFixture<FirRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
