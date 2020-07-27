import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostListener, TemplateRef, OnDestroy,
} from '@angular/core';
import {ModalTitleDirective} from './modal-title.directive';
import {ModalFooterDirective} from './modal-footer.directive';
import {CdkTrapFocus} from '@angular/cdk/a11y';

import {hideOthers} from 'aria-hidden';
import {ModalPortalService} from '../modal-portal/modal-portal.service';
import {TemplatePortal} from '@angular/cdk/portal';
import {$e} from 'codelyzer/angular/styles/chars';

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
  @Output() close = new EventEmitter<MouseEvent>()

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
    if (this.modalPortalService.templatePortal.isAttached) {
      this.modalPortalService.templatePortal.detach()
    }
  }

  doOpen(): void {

    this.modalPortalService.templatePortal = new TemplatePortal(
      this.modalPortalContent,
      this.modalPortalService.templatePortalRef,
    );

    setTimeout(async () => {
      this.trapFocus.enabled = true
      await this.trapFocus.focusTrap.focusInitialElementWhenReady();
      this.unhideOthers = hideOthers(this.modalPortalService.portalHost.nativeElement);
    });
  }

  doClose(): void {
    if (this.trapFocus.focusTrap.hasAttached()) {
      this.trapFocus.enabled = false;
      this.unhideOthers();
      this.trapFocus.focusTrap.destroy();
      if (this.returnFocusTo) {
        this.returnFocusTo.focus();
      }
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
