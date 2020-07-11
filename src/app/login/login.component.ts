import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email : '',
    password: '',
  }
  captcha: any
  attempts = 0 ;
  DbData = {email: 'anushka@abc.com' , password: '123456'} // to be fetched from DB
  constructor(private router: Router) { }

  ngOnInit() {
    this.captcha = null;
  }
  login(user){
    if(user){
      if(user.email && user.password) {
        if(user.email == this.DbData['email'] && user.password == this.DbData['password']){
          //Navigate to Success Page
          console.log('Success');
          this.router.navigateByUrl('success');
        } else{
          if (this.attempts < 3) {
            this.attempts += 1;
          } else {
            //Navigate to Error Page
            this.router.navigateByUrl('error');
          }
        }
      }
    }

  }
}
