import {Component} from '@angular/core';

@Component({
  selector: 'app-modals-multiple-modals',
  templateUrl: './modals-multiple-modals.component.html',
  styleUrls: ['./modals-multiple-modals.component.scss']
})
export class ModalsMultipleModalsComponent {

  modalState = [
    false,
    false,
    false
  ];

  openModal(which: number): void  {
    this.modalState[which] = true;
  }

  closeModal(which: number): void  {
    this.modalState[which] = false;
  }

}
