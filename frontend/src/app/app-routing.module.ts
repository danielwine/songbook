import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './page/album/album.component';
import { ArtistComponent } from './page/artist/artist.component';
import { ComposerComponent } from './page/composer/composer.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { LyricistComponent } from './page/lyricist/lyricist.component';
import { SongComponent } from './page/song/song.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'songs',
    component: SongComponent,
  },
  {
    path: 'albums',
    component: AlbumComponent,
  },
  {
    path: 'artists',
    component: ArtistComponent,
  },
  {
    path: 'lyricists',
    component: LyricistComponent,
  },
  {
    path: 'composers',
    component: ComposerComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "users/edit/:id",
    component: UserEditComponent,
  },
  {
    path: "forbidden",
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
