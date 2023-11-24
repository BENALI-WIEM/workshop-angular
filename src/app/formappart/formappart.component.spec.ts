import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormappartComponent } from './formappart.component';

describe('FormappartComponent', () => {
  let component: FormappartComponent;
  let fixture: ComponentFixture<FormappartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormappartComponent]
    });
    fixture = TestBed.createComponent(FormappartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
