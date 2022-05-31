import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'songs',
    component: HomeComponent,
  },
  {
    path: 'albums',
    component: HomeComponent,
  },
  {
    path: 'artists',
    component: HomeComponent,
  },
  {
    path: 'lyricists',
    component: HomeComponent,
  },
  {
    path: 'composer',
    component: HomeComponent,
  },
  {
    path: "category/:categoryId",
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
