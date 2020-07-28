import {Component, HostBinding} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @HostBinding('class.d-block') _hostDisplayBlock = true;
  @HostBinding('class.sticky-top') _hostStickyTop = true;

  navOpen = false;

  routeChange = this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => this.closeNav())

  constructor(private router: Router) {
  }

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
