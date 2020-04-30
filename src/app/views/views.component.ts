import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent implements OnInit {
  public firstName: any;
  public lastName: any;
  public password: any;
  public email: any;
  public submitPayload: any = [];
  public firstName1: any;
  public lastName1: any;
  public password1: any;
  public email1: any;
  public submitPayload1: any = [];
  public Gender: any;
  public enc: any;
  public dec: any;
  public state: any;
  public date: any;
  public require: any;
  constructor() {}

  ngOnInit(): void {}
}
function submitbnr() {
  var psd = '1';
  this.enc = CryptoJS.DES.encrypt(this.password1, psd);
  var dec = CryptoJS.DES.decrypt(this.enc, psd);
  let newdata = [];
  newdata = [
    {
      firstname1: this.firstName1,
      lastname1: this.lastName1,
      email1: this.email1,
      password1: this.enc,
      state: this.state,
      date: this.date,
      decrypted: dec,
      Gender: this.Gender,
    },
  ];

  this.submitPayload1.push(newdata);
  console.log(this.submitPayload1);
  // console.log(this.obj)
  alert('thank you for your records!');
}
function clearArray() {
  this.submitPayload = [];
  this.submitPayload1 = [];
  alert('Blank');
}
