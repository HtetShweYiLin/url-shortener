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
    this.getAllShortenUrls();
  }

  getAllShortenUrls() {
    this._shortenUrlService.getAllUrls().subscribe(res => {
      console.log("res",res);
      this.shortenUrlList = res;
    })
  }

  shortenUrl($event) {
    console.log("shortenUrl",$event);
    this._shortenUrlService.shortenUrl($event).subscribe(res => {
      console.log("res",res);
      this.getAllShortenUrls();
    })
  }

}
