import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalPortalComponent} from './modal-portal.component';

describe('ModalPortalComponent', () => {
  let component: ModalPortalComponent;
  let fixture: ComponentFixture<ModalPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
