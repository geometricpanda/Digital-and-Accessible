import {Component} from '@angular/core';

@Component({
  selector: 'app-single-modal',
  templateUrl: './single-modal.component.html',
  styleUrls: ['./single-modal.component.scss'],
})
export class SingleModalComponent {

  modalState = false;

  openModal() {
    this.modalState = true;
  }

  closeModal() {
    this.modalState = false;
  }

}
