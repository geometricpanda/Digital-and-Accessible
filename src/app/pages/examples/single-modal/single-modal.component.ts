import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-modal',
  templateUrl: './single-modal.component.html',
  styleUrls: ['./single-modal.component.scss'],
})
export class SingleModalComponent {

  modalState = false;

  toggleModal() {
    this.modalState
      ? this.closeModal()
      : this.openModal();
  }

  openModal() {
    this.modalState = true;
  }

  closeModal() {
    this.modalState = false;
  }

}
