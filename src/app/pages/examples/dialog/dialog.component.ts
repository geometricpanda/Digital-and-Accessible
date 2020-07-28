import {Component} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

  modalState = false;

  openModal() {
    this.modalState = true;
  }

  closeModal() {
    this.modalState = false;
  }

}
