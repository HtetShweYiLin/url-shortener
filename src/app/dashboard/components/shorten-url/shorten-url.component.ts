import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.sass']
})
export class ShortenUrlComponent implements OnInit {
  @Output() onClickBtn = new EventEmitter<any>();

  public urlForm: FormGroup;
  public option = 1;//option 1 is public type and 0 is unlist type
  public longUrl = '';
  public urlObj = {
    'type': 1,
    'longUrl': ''
  }

  constructor(private formBuilder: FormBuilder) {
    let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    this.urlForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    })
  }

  get m(){
    return this.urlForm.controls;
  }

  ngOnInit() {
  }

  handleChange($event) {
    this.option = $event.target.value;
    console.log('handleChange',this.option);
  }

  onClickButton() {
    this.longUrl = this.urlForm.value.url;
    this.urlObj.type = this.option;
    this.urlObj.longUrl = this.longUrl;
    console.log("onClickButton",this.urlObj);
    this.onClickBtn.emit(this.urlObj);
  }

}
