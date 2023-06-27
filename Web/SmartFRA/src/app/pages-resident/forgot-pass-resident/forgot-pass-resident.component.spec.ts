import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassResidentComponent } from './forgot-pass-resident.component';

describe('ForgotPassResidentComponent', () => {
  let component: ForgotPassResidentComponent;
  let fixture: ComponentFixture<ForgotPassResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassResidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
