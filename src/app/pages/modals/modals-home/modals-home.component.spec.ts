import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalsHomeComponent} from './modals-home.component';

describe('ExamplesComponent', () => {
  let component: ModalsHomeComponent;
  let fixture: ComponentFixture<ModalsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
