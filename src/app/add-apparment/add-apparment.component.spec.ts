import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApparmentComponent } from './add-apparment.component';

describe('AddApparmentComponent', () => {
  let component: AddApparmentComponent;
  let fixture: ComponentFixture<AddApparmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApparmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
