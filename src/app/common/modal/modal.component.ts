import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {ModalTitleDirective} from './modal-title.directive';
import {ModalFooterDirective} from './modal-footer.directive';
import {CdkTrapFocus} from '@angular/cdk/a11y';

import {hideOthers} from 'aria-hidden';
import {ModalPortalService} from '../modal-portal/modal-portal.service';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges, OnDestroy {

  @ContentChild(ModalTitleDirective) title: ModalTitleDirective;
  @ContentChild(ModalFooterDirective) footer: ModalFooterDirective;
  @ViewChild(CdkTrapFocus) trapFocus: CdkTrapFocus;
  @ViewChild('modalPortalContent') modalPortalContent: TemplateRef<unknown>;
  @ViewChild('modalWrapper') modalWrapper: ElementRef<HTMLDivElement>

  @Input() isDialog = false;
  @Input() open = false;
  @Input() returnFocusTo: HTMLButtonElement | HTMLAnchorElement;
  @Input() showBackdrop = true;
  @Output() close = new EventEmitter<MouseEvent>();

  templatePortal: TemplatePortal;

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if ($event.key === 'Escape' && !this.isDialog) {
      this.emitClose();
    }
  }

  private unhideOthers: () => void;

  constructor(private elRef: ElementRef,
              private modalPortalService: ModalPortalService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open?.currentValue) {
      this.doOpen();
    }
    if (!changes.open?.currentValue && !changes.open?.isFirstChange()) {
      this.doClose();
    }
  }

  ngOnDestroy(): void {
    this.detachPortal();
  }

  doOpen(): void {
    this.attachPortal();
    this.unhideOthers = hideOthers(this.modalPortalService.portalHost.nativeElement);

    setTimeout(() => this.trapFocus.enabled = true);
    setTimeout(async () => await this.trapFocus.focusTrap.focusInitialElementWhenReady(), 50);
  }

  doClose(): void {
    if (this.trapFocus.focusTrap.hasAttached()) {
      this.trapFocus.enabled = false;
      this.unhideOthers();
      this.trapFocus.focusTrap.destroy();
    }

    this.detachPortal();

    if (this.returnFocusTo) {
      this.returnFocusTo.focus();
      this.returnFocusTo.scrollIntoView();
    }
  }

  attachPortal() {
    this.detachPortal();
    this.templatePortal = new TemplatePortal(this.modalPortalContent, this.modalPortalService.templatePortalRef);
    this.modalPortalService.templatePortal = this.templatePortal;
  }

  detachPortal() {
    if (this.templatePortal?.isAttached) {
      this.templatePortal.detach();
    }
  }

  clickBackdrop($event: MouseEvent) {
    if (this.modalWrapper.nativeElement === $event.target && !this.isDialog) {
      this.emitClose();
    }
  }

  emitClose(): void {
    if (this.open) {
      this.close.emit();
    }
  }

}
