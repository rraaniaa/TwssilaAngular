import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCovComponent } from './create-cov.component';

describe('CreateCovComponent', () => {
  let component: CreateCovComponent;
  let fixture: ComponentFixture<CreateCovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCovComponent]
    });
    fixture = TestBed.createComponent(CreateCovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
