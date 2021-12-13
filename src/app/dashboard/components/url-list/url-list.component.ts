import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.sass']
})
export class UrlListComponent implements OnInit {
  @Input() urlList;

  constructor() { }

  ngOnInit() {
  }

}
