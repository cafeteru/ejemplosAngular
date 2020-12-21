import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, SpotifyData } from '../models/SpotifyData';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getQuery(query: string): string {
    return `https://api.spotify.com/v1/${query}`;
  }

  getHeaders(): {} {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer BQCuWgbLH4hgvf7HBN-93Zqt2Ih5Sw08JKVhfrTzFq4FHWD7d1vzmuX5dwFyrGbPTjY6-A9rsIXCotwzDLo'
      })
    };
  }

  getNewReleases(): Observable<Item[]> {
    const url = this.getQuery('browse/new-releases');
    return this.httpClient.get<SpotifyData>(url, this.getHeaders()).pipe(
      map(data => data.albums.items)
    );
  }

  getArtists(value: string): Observable<Item[]> {
    const url = this.getQuery(`search?q=${value}&type=artist`);
    return this.httpClient.get<any>(url, this.getHeaders()).pipe(
      map(data => data.artists.items)
    );
  }
}
