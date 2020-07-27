import {AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalPortalService} from './modal-portal.service';

@Component({
  selector: 'app-modal-portal',
  templateUrl: './modal-portal.component.html',
  styleUrls: ['./modal-portal.component.scss'],
})
export class ModalPortalComponent implements AfterViewInit {

  @ViewChild('templatePortalRef') templatePortalRef: ViewContainerRef;

  constructor(public modalPortalService: ModalPortalService,
              private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.modalPortalService.templatePortalRef = this.templatePortalRef;
    this.modalPortalService.portalHost = this.elRef;
  }

}
