import {Component} from '@angular/core';

@Component({
  selector: 'app-modals-dialog',
  templateUrl: './modals-dialog.component.html',
  styleUrls: ['./modals-dialog.component.scss'],
})
export class ModalsDialogComponent {

  modalState = false;

  openModal(): void {
    this.modalState = true;
  }

  closeModal(): void  {
    this.modalState = false;
  }

}
