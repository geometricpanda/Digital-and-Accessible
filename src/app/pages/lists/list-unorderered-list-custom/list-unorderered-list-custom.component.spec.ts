import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnordereredListCustomComponent } from './list-unorderered-list-custom.component';

describe('ListUnordereredListCustomComponent', () => {
  let component: ListUnordereredListCustomComponent;
  let fixture: ComponentFixture<ListUnordereredListCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnordereredListCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnordereredListCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
