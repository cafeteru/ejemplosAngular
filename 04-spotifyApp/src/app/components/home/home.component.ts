import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songs: any[];

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.songs = [];
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.songs = data.albums.items;
    });
  }

}
