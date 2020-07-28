import {Component} from '@angular/core';

@Component({
  selector: 'app-multiple-modals',
  templateUrl: './multiple-modals.component.html',
  styleUrls: ['./multiple-modals.component.scss']
})
export class MultipleModalsComponent {

  modalState = [
    false,
    false,
    false
  ]

  openModal(which: number) {
    this.modalState[which] = true;
  }

  closeModal(which: number) {
    this.modalState[which] = false;
  }

}
