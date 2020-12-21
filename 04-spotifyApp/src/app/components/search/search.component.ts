import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Observable, of } from 'rxjs';
import { Item } from '../../models/SpotifyData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists$: Observable<Item[]> = of();

  constructor(
    private spotifyService: SpotifyService
  ) {
  }

  ngOnInit() {
  }

  search(value: string) {
    this.artists$ = this.spotifyService.getArtists(value);
  }
}
