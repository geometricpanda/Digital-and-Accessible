import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocusOnLoad]',
})
export class FocusOnLoadDirective implements OnInit {

  @HostBinding('attr.tabindex') hostTabIndex = -1;
  @HostBinding('class.no-focus-outline') hostClass = true;

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    setTimeout(() => this.elRef.nativeElement.focus(), 50);
  }

}
