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
  sidebarMenu: IMenuItem[] = [
    { link: '/', title: 'Kezdőoldal', icon: 'home' },

    { link: '/songs', title: 'Dalok', icon: 'home' },
    { link: '/albums', title: 'Albumok', icon: 'archive' },
    { link: '/artists', title: 'Előadók', icon: 'edit2' },
    { link: '/lyricists', title: 'Szövegírók', icon: 'edit2' },
    { link: '/composers', title: 'Zeneszerzők', icon: 'edit2' },

    { link: '/logout', title: 'Kijelentkezés', icon: 'edit2' },
  ];
  constructor() {}
}
