import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDescriptionListComponent } from './list-description-list.component';

describe('ListDescriptionListComponent', () => {
  let component: ListDescriptionListComponent;
  let fixture: ComponentFixture<ListDescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
