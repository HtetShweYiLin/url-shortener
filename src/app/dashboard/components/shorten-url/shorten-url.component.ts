import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.sass']
})
export class ShortenUrlComponent implements OnInit {
  @Output() onClickBtn = new EventEmitter<any>();

  public option = 1;
  public longUrl = '';
  public urlObj = {
    'type': 1,
    'longUrl': ''
  }

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(url) {
    this.longUrl = url;
  }

  handleChange($event) {
    this.option = $event.target.value;
    console.log('handleChange',this.option);
  }

  onClickButton() {
    this.urlObj.type = this.option;
    this.urlObj.longUrl = this.longUrl;
    console.log("onClickButton",this.urlObj);
    this.onClickBtn.emit(this.urlObj);
  }

}
