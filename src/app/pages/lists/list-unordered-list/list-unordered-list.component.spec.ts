import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnorderedListComponent } from './list-unordered-list.component';

describe('ListUnorderedListComponent', () => {
  let component: ListUnorderedListComponent;
  let fixture: ComponentFixture<ListUnorderedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnorderedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
