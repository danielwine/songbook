import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiUrl = 'http://localhost:3000';
  toolbarMenu: IMenuItem[] = [
    { link: '/songs', title: 'Dalok', icon: 'library_music' },
    { link: '/albums', title: 'Albumok', icon: 'album' },
    { link: '/artists', title: 'Előadók', icon: 'face6' },
    { link: '/lyricists', title: 'Szövegírók', icon: 'edit_note' },
    { link: '/composers', title: 'Zeneszerzők', icon: 'music_note' },
  ];
  sidebarMenu = this.toolbarMenu;
  loginItem: IMenuItem = {
    link: '/login',
    title: 'Bejelentkezés',
    icon: 'login',
  };
  logoutItem: IMenuItem = {
    link: '/logout',
    title: 'Kijelentkezés',
    icon: 'logout',
  };
  constructor() {}
}
