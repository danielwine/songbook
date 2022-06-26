import { Injectable } from '@angular/core';
import { IMatTableColumn } from '../common/data-table/mat-data-table/mat-data-table.component';

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

  songTableColumns: IMatTableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'title', title: 'Cím' },
    { key: 'artist', title: 'Előadó' },
    { key: 'album', title: 'Album' },
    { key: 'x_genre', title: 'Műfaj' },
    { key: 'actions', title: '' },
  ];
  artistTableColumns: IMatTableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'name', title: 'Név' },
    { key: 'songs', title: 'Dalok' },
    { key: 'imageUrl', title: 'Kép' },
    { key: 'actions', title: '' },
  ];
  albumTableColumns: IMatTableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'name', title: 'Cím' },
    { key: 'artist', title: 'Előadó' },
    { key: 'songs', title: 'Dalok' },
    { key: 'year', title: 'Megjelenés' },
    { key: 'imageUrl', title: 'Borítókép' },
    { key: 'actions', title: '' },
  ];
  lyricistTableColumns: IMatTableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'name', title: 'Név' },
    { key: 'songs', title: 'Dalok' },
    { key: 'actions', title: '' },
  ];
  composerTableColumns: IMatTableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'name', title: 'Név' },
    { key: 'songs', title: 'Dalok' },
    { key: 'actions', title: '' },
  ];

  constructor() {}
}
