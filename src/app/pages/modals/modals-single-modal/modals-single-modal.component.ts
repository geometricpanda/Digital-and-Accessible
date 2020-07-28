import {Component} from '@angular/core';

@Component({
  selector: 'app-modals-single-modal',
  templateUrl: './modals-single-modal.component.html',
  styleUrls: ['./modals-single-modal.component.scss'],
})
export class ModalsSingleModalComponent {

  modalState = false;

  openModal(): void {
    this.modalState = true;
  }

  closeModal(): void  {
    this.modalState = false;
  }

}
