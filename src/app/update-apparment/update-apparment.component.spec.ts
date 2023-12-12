import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApparmentComponent } from './update-apparment.component';

describe('UpdateApparmentComponent', () => {
  let component: UpdateApparmentComponent;
  let fixture: ComponentFixture<UpdateApparmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApparmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateApparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
