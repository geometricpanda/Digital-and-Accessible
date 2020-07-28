import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHomeComponent } from './lists-home.component';

describe('DefinitionListsHomeComponent', () => {
  let component: ListsHomeComponent;
  let fixture: ComponentFixture<ListsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
