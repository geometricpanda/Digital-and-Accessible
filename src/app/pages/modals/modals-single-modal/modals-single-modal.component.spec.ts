import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalsSingleModalComponent} from './modals-single-modal.component';

describe('SingleModalComponent', () => {
  let component: ModalsSingleModalComponent;
  let fixture: ComponentFixture<ModalsSingleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsSingleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsSingleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
