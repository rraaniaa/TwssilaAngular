import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCovComponent } from './update-cov.component';

describe('UpdateCovComponent', () => {
  let component: UpdateCovComponent;
  let fixture: ComponentFixture<UpdateCovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCovComponent]
    });
    fixture = TestBed.createComponent(UpdateCovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
