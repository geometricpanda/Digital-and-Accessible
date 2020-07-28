import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalsMultipleModalsComponent} from './modals-multiple-modals.component';

describe('MultipleModalsComponent', () => {
  let component: ModalsMultipleModalsComponent;
  let fixture: ComponentFixture<ModalsMultipleModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsMultipleModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsMultipleModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
