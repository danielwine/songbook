import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ScrollingModule} from '@angular/cdk/scrolling';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

import { HomeComponent } from './page/home/home.component';

import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SimplelistComponent } from './common/simplelist/simplelist.component';
import { LyricsComponent } from './common/lyrics/lyrics.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    SorterPipe,
    SimplelistComponent,
    LyricsComponent,
    ForbiddenComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ScrollingModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    LayoutModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
