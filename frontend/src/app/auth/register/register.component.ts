import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  onRegister( form: NgForm ): void {
    this.authService.register( form.value ).subscribe(res => {
      this.router.navigateByUrl('/home');
    })
  }

}
