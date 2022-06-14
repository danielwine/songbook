import { Component, Input, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  menu: IMenuItem[] = this.config.toolbarMenu;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {}
}
