import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgForm }   from '@angular/forms';
import {HttpBackend,HttpHeaders,HttpClient} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  }),
  

};



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  
  constructor(private _http: HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private headers = new Headers({'Content-Type': 'application/json'});
  
  onSubmit(form: NgForm){
  	console.log(form.value);

  


}
}
