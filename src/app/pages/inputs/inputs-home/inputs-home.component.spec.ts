import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsHomeComponent } from './inputs-home.component';

describe('InputsHomeComponent', () => {
  let component: InputsHomeComponent;
  let fixture: ComponentFixture<InputsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
