import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllapiserviceService } from '../allapiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  submitted = false;
  empList: Array<{ Email: string }> = [];
  message: any;
  email: any;
  password: any
  data: any = [];
  decrpt: any = [];

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private allapi: AllapiserviceService) {

  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginform.controls; }


  login() {
    this.submitted = true;
    let body = {
      email: this.email,
      password: this.password,
    }
    this.allapi.login(body).subscribe(r => {
      this.data = r[0].token
      localStorage.setItem('token', this.data)
      this.decrpt = JSON.parse(atob(this.data.split('.')[1]))
      let role = this.decrpt.subject.role
      if (role == 'Normal') {
        this.route.navigate(['getdata'])
      }
      else {
        this.route.navigate(['audit'])
      }
    })
  }



}
