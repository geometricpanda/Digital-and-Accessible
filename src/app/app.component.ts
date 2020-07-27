import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal-test';

  modal = false;

  showModal() {
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }
}
