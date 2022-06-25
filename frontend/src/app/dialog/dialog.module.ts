import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipeModule } from '../pipe/pipe.module';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DialogComponent } from './common/dialog/dialog.component';
import { SongEditComponent } from './form/song-edit/song-edit.component';
import { AlbumEditComponent } from './form/album-edit/album-edit.component';
import { ArtistEditComponent } from './form/artist-edit/artist-edit.component';
import { LyricistEditComponent } from './form/lyricist-edit/lyricist-edit.component';
import { ComposerEditComponent } from './form/composer-edit/composer-edit.component';

@NgModule({
  declarations: [DialogComponent, SongEditComponent, AlbumEditComponent, ArtistEditComponent, LyricistEditComponent, ComposerEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    MatDialogModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class DialogModule {}
