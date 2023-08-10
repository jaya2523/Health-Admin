import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent {
loginForm:FormGroup|any;
username: string="";
password: string="";
authError: string="";
showLogin=false;
constructor(private Formbuilder: FormBuilder){
  this.loginForm = Formbuilder.group({
    Uname: new FormControl(),
    Upass: new FormControl()
  })
}
PostData1(loginForm: NgForm){
  console.log(loginForm.controls);
  this.showLogin=false;
}
PostData2(loginForm: NgForm){
  console.log(loginForm.controls);
  this.showLogin=false;
}
openLogin(){
  this.showLogin=true;
}
openRegister(){
  this.showLogin=false;
}
}
