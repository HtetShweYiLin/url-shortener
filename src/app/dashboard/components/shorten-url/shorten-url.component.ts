import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.sass']
})
export class ShortenUrlComponent implements OnInit {
  public longUrl:string = '';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(url) {
    this.longUrl = url;
  }

}
