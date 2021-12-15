import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlService {
  public baseurl = environment.apiurl + '/api/url';

  constructor(private http: HttpClient) { }

  getAllUrls() {
    let url = this.baseurl;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(url, httpOptions).pipe(map((res:Response) => {
      let result = res;
      return result;
    }));
  }

  shortenUrl(data) {
    let url = this.baseurl + '/shorten';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(url, data, httpOptions).pipe(map((res:Response) => {
      let result = res;
      return result;
    }));
  }
}
