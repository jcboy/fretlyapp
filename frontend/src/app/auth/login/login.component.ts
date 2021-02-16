import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: UserModel;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  onLogin( form: NgForm ):void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    })
  }

}
