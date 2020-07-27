import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalPortalService} from './modal-portal.service';

@Component({
  selector: 'app-modal-portal',
  templateUrl: './modal-portal.component.html',
  styleUrls: ['./modal-portal.component.scss'],
})
export class ModalPortalComponent implements AfterViewInit {


  constructor(public modalPortalService: ModalPortalService,
              private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.modalPortalService.portalHost = this.elRef;
  }

}
