import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsSyntheticSelectComponent } from './inputs-synthetic-select.component';

describe('InputsSyntheticSelectComponent', () => {
  let component: InputsSyntheticSelectComponent;
  let fixture: ComponentFixture<InputsSyntheticSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsSyntheticSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsSyntheticSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
