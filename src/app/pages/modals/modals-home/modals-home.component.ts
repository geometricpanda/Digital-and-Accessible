import {Component, OnInit} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-modals-home',
  templateUrl: './modals-home.component.html',
  styleUrls: ['./modals-home.component.scss'],
})
export class ModalsHomeComponent implements OnInit {

  constructor(private liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit() {
    this.liveAnnouncer.announce('Hello Abi', 'polite', 30000)
  }

}
