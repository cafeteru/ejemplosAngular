import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpotifyData} from '../models/SpotifyData';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
  }

  getNewReleases(): Observable<SpotifyData> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC7XxORjtbveau_jN7FCeXfCHGYFrfr6QRqAUM9WKt1PZnaTwK8scWA-LpdVmZWmu5Nwxqq2TbCrCI_05g'
    });
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    return this.httpClient.get<SpotifyData>(url, {headers});
  }
}
