import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsCheckboxComponent } from './inputs-checkbox.component';

describe('InputsCheckboxComponent', () => {
  let component: InputsCheckboxComponent;
  let fixture: ComponentFixture<InputsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
