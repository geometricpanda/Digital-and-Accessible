import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderedListComponent } from './list-ordered-list.component';

describe('ListOrderedListComponent', () => {
  let component: ListOrderedListComponent;
  let fixture: ComponentFixture<ListOrderedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
