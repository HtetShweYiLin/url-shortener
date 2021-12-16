import { Component, OnInit } from '@angular/core';
import { ShortenUrlService } from 'src/app/dashboard/services/shorten-url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public shortenUrlList;

  constructor(private _shortenUrlService: ShortenUrlService) { }

  ngOnInit() {
    this.getPublicShortenUrls();
  }

  getPublicShortenUrls() {
    this._shortenUrlService.getAllPublicUrls().subscribe(res => {
      console.log("res",res);
      this.shortenUrlList = res;
    })
  }

  shortenUrl($event) {
    console.log("shortenUrl",$event);
    this._shortenUrlService.shortenUrl($event).subscribe(res => {
      console.log("res",res);
      this.getPublicShortenUrls();
    },err => {
      console.log(err);
    })
  }

}
