import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspersonalComponent } from './formspersonal.component';

describe('FormspersonalComponent', () => {
  let component: FormspersonalComponent;
  let fixture: ComponentFixture<FormspersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormspersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormspersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
