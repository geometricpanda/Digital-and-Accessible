import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsRadioComponent } from './inputs-radio.component';

describe('InputsRadioComponent', () => {
  let component: InputsRadioComponent;
  let fixture: ComponentFixture<InputsRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
