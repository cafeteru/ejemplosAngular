import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from '../../models/SpotifyData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songs$: Observable<Item[]> = of();

  constructor(
    private spotifyService: SpotifyService
  ) {
  }

  ngOnInit() {
    this.songs$ = this.spotifyService.getNewReleases();
  }

}
