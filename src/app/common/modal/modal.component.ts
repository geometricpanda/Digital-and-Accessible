import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  ViewChild,
  OnChanges,
  SimpleChange, SimpleChanges, ElementRef, NgZone, HostListener, Host,
} from '@angular/core';
import {ModalTitleDirective} from './modal-title.directive';
import {ModalFooterDirective} from './modal-footer.directive';
import {CdkTrapFocus} from '@angular/cdk/a11y';

import {hideOthers} from 'aria-hidden';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges {

  @HostListener('keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if ($event.key === 'Escape') {
      this.emitClose();
    }
  }

  @ContentChild(ModalTitleDirective) title: ModalTitleDirective;
  @ContentChild(ModalFooterDirective) footer: ModalFooterDirective;
  @ViewChild(CdkTrapFocus) trapFocus: CdkTrapFocus;
  @ViewChild('modal') modalElem: ElementRef<HTMLDivElement>;

  @Input() open = false;
  @Input() returnFocus: HTMLBaseElement;
  @Output() close = new EventEmitter<MouseEvent>()

  private unhideOthers: () => void;

  constructor(private elRef: ElementRef) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open?.currentValue) {
      this.doOpen();
    }
    if (!changes.open?.currentValue && !changes.open?.isFirstChange()) {
      this.doClose();
    }
  }

  doOpen() {
    this.trapFocus.enabled = true;

    setTimeout(async () => {
      await this.trapFocus.focusTrap.focusInitialElementWhenReady();
      this.unhideOthers = hideOthers(this.elRef.nativeElement);
    });
  }

  doClose() {
    if (this.trapFocus.focusTrap.hasAttached()) {
      this.trapFocus.enabled = false;
      this.unhideOthers();
      this.trapFocus.focusTrap.destroy();
      if (this.returnFocus) {
        this.returnFocus.focus();
      }
    }
  }

  emitClose() {
    if (this.open) {
      this.close.emit();
    }
  }

}
