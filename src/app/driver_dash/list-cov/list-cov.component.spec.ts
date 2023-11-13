import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCovComponent } from './list-cov.component';

describe('ListCovComponent', () => {
  let component: ListCovComponent;
  let fixture: ComponentFixture<ListCovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCovComponent]
    });
    fixture = TestBed.createComponent(ListCovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
