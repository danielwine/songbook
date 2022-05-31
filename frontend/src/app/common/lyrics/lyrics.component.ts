import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  @Input() song: Song = new Song();
  constructor() {}

  ngOnInit(): void {}
}
