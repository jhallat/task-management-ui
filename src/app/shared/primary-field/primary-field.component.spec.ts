import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFieldComponent } from './primary-field.component';

describe('PrimaryFieldComponent', () => {
  let component: PrimaryFieldComponent;
  let fixture: ComponentFixture<PrimaryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
