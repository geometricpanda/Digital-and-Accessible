import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionListsComponent } from './definition-lists.component';

describe('DefinitionListsHomeComponent', () => {
  let component: DefinitionListsComponent;
  let fixture: ComponentFixture<DefinitionListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
