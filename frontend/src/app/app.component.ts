import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfigService, IMenuItem } from './service/config.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'campfire';
  sidebar: IMenuItem[] = this.config.sidebarMenu;
  menu: IMenuItem[] = this.config.toolbarMenu;
  login: IMenuItem = this.config.loginItem;
  logout: IMenuItem = this.config.logoutItem;
  user$ = this.auth.user$;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private config: ConfigService,
    private auth: AuthService
  ) {}
}
