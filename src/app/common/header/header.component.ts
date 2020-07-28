import {Component, HostBinding} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @HostBinding('class.d-block') hostDisplayBlock = true;
  @HostBinding('class.sticky-top') hostStickyTop = true;

  navOpen = false;

  routeChange = this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => this.closeNav());

  constructor(private router: Router) {
  }

  openNav(): void {
    this.navOpen = true;
  }

  closeNav(): void {
    this.navOpen = false;
  }

  toggleNav(): void {
    this.navOpen
      ? this.closeNav()
      : this.openNav();
  }

}
