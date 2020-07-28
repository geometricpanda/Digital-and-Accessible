import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalsDialogComponent} from './modals-dialog.component';

describe('DialogComponent', () => {
  let component: ModalsDialogComponent;
  let fixture: ComponentFixture<ModalsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
