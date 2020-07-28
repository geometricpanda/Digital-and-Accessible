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

import {TemplatePortal} from '@angular/cdk/portal';
import {CdkTrapFocus} from '@angular/cdk/a11y';
import {hideOthers} from 'aria-hidden';

import {ModalPortalService} from '../modal-portal/modal-portal.service';
import {ModalTitleDirective} from './modal-title.directive';
import {ModalFooterDirective} from './modal-footer.directive';
import {timer} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

let instanceId = 0;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges, OnDestroy {

  constructor(private elRef: ElementRef,
              private modalPortalService: ModalPortalService) {
  }

  @ContentChild(ModalTitleDirective) title: ModalTitleDirective;
  @ContentChild(ModalFooterDirective) footer: ModalFooterDirective;
  @ViewChild(CdkTrapFocus) trapFocus: CdkTrapFocus;
  @ViewChild('modalPortalContent') modalPortalContent: TemplateRef<unknown>;
  @ViewChild('modalWrapper') modalWrapper: ElementRef<HTMLDivElement>;

  @Input() isDialog = false;
  @Input() open = false;
  @Input() returnFocusTo: HTMLButtonElement | HTMLAnchorElement;
  @Input() showBackdrop = true;
  @Input() id = `modal-${instanceId++}`;
  @Output() doClose = new EventEmitter<MouseEvent>();

  templatePortal: TemplatePortal;

  trapFocusCheck = timer()
    .pipe(filter(() => Boolean(this.trapFocus)))
    .pipe(take(1));

  private unhideOthers: () => void;

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent): void {
    if ($event.key === 'Escape' && !this.isDialog) {
      this.emitClose();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open?.currentValue) {
      this.attachAndOpen();
    }
    if (!changes.open?.currentValue && !changes.open?.isFirstChange()) {
      this.closeAndDetach();
    }
  }

  ngOnDestroy(): void {
    this.detachPortal();
  }

  attachAndOpen(): void {
    this.attachPortal();
    this.unhideOthers = hideOthers(this.modalPortalService.portalHost.nativeElement);

    this.trapFocusCheck
      .subscribe(() => {
        this.trapFocus.enabled = true
        return this.trapFocus.focusTrap.focusInitialElementWhenReady();
      });
  }

  closeAndDetach(): void {
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

  attachPortal(): void {
    this.detachPortal();
    this.templatePortal = new TemplatePortal(this.modalPortalContent, this.modalPortalService.templatePortalRef);
    this.modalPortalService.templatePortal = this.templatePortal;
  }

  detachPortal(): void {
    if (this.templatePortal?.isAttached) {
      this.templatePortal.detach();
    }
  }

  clickBackdrop($event: MouseEvent): void {
    if (this.modalWrapper.nativeElement === $event.target && !this.isDialog) {
      this.emitClose();
    }
  }

  emitClose(): void {
    if (this.open) {
      this.doClose.emit();
    }
  }

}
