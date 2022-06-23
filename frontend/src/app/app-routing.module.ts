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
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'songs',
    component: SongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albums',
    component: AlbumComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'artists',
    component: ArtistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lyricists',
    component: LyricistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'composers',
    component: ComposerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  // {
  //   path: "edit",
  //   component: MatDataEditorComponent,
  // },
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
