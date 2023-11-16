import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardresidenceComponent } from './cardresidence.component';

describe('CardresidenceComponent', () => {
  let component: CardresidenceComponent;
  let fixture: ComponentFixture<CardresidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardresidenceComponent]
    });
    fixture = TestBed.createComponent(CardresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
