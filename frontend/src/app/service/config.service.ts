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
    { link: '/songs', title: 'Dalok', icon: 'home' },
    { link: '/albums', title: 'Albumok', icon: 'archive' },
    { link: '/artists', title: 'Előadók', icon: 'edit2' },
    { link: '/lyricists', title: 'Szövegírók', icon: 'edit2' },
    { link: '/composers', title: 'Zeneszerzők', icon: 'edit2' },
    { link: '/login', title: 'Bejelentkezés', icon: 'edit2' },
  ];
  sidebarMenu: IMenuItem[] = [
    { link: '/songs', title: 'Dalok', icon: 'home' },
    { link: '/albums', title: 'Albumok', icon: 'archive' },
    { link: '/artists', title: 'Előadók', icon: 'edit2' },
    { link: '/lyricists', title: 'Szövegírók', icon: 'edit2' },
    { link: '/composers', title: 'Zeneszerzők', icon: 'edit2' },
    { link: '/login', title: 'Bejelentkezés', icon: 'edit2' },
  ];
  constructor() {}
}
