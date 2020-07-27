import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @HostBinding('class.d-block') _hostDisplayBlock = true;
  @HostBinding('class.sticky-top') _hostStickyTop = true;

  navOpen = false;

  openNav() {
    this.navOpen = true;
  }

  closeNav() {
    this.navOpen = false;
  }

  toggleNav() {
    this.navOpen
      ? this.closeNav()
      : this.openNav();
  }

}
