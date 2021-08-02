import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementedPageComponent } from './not-implemented-page.component';

describe('NotImplementedPageComponent', () => {
  let component: NotImplementedPageComponent;
  let fixture: ComponentFixture<NotImplementedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotImplementedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
