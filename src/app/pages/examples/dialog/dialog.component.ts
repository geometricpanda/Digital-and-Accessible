import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

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
