import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalsInterstitialComponent} from './modals-interstitial.component';

describe('InterstitialComponent', () => {
  let component: ModalsInterstitialComponent;
  let fixture: ComponentFixture<ModalsInterstitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsInterstitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsInterstitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
