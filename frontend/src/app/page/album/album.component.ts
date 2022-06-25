import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AlbumEditComponent } from 'src/app/dialog/form/album-edit/album-edit.component';
import { DialogService } from 'src/app/dialog/service/dialog.service';
import { MessageService } from 'src/app/dialog/service/message.service';
import { Album } from 'src/app/model/album';
import { AlbumService } from 'src/app/service/album.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  columns = this.config.albumTableColumns;
  list$: Observable<Album[]> = this.albumService.getAll();

  constructor(
    private config: ConfigService,
    private albumService: AlbumService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  create() {
    this.dialogService
      .open(AlbumEditComponent, new Album())
      .pipe(take(1))
      .subscribe((data) => {
        let { _id, ...result } = data;
        console.log('album result: ', result);
        this.albumService.createItem(result).subscribe((item) => {
          this.list$ = this.albumService.getAll();
        });
      });
  }

  update(item: Album) {
    this.albumService.getItem(item._id.toString()).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService
          .open(AlbumEditComponent, item)
          .pipe(take(1))
          .subscribe((result) => {
            if (result)
              this.albumService.updateItem(result).subscribe(() => {
                this.list$ = this.albumService.getAll();
              });
          });
      }
    });
  }

  delete(item: Album) {
    if (item.songs.length == 0)
      this.albumService.deleteItem(item._id.toString()).subscribe({
        next: (error) => {
          if (error) {
            this.messageService.showDeleted();
            this.list$ = this.albumService.getAll();
          } else this.messageService.showFailed();
        },
      });
    else
      this.messageService.openDialog({
        title: 'Nem teljesíthető',
        content: 'Egy album nem törölhető, amíg dalok vannak hozzárendelve.',
        acknowledgeMode: true,
      });
  }

  ngOnInit(): void {}
}
