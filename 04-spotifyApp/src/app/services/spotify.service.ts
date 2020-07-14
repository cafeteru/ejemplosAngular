import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
  }

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBXRcCHt6JGryxrJPesC2Ac6Xfu1tslm_VdH6oNal3ABM2DRlZ2Av4MaZzTBzeQy3As4L5e3_Eu7DcWER0'
    });
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    return this.httpClient.get(url, {headers});
  }
}
