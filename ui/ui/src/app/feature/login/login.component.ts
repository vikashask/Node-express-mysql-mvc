import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AsyncHttpService } from '../../provider/async-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  selectedField = '';
  loginForm: FormGroup;
  imageDomain = environment.imageDomain;

  constructor(private formBuilder: FormBuilder, private asyncHttpService: AsyncHttpService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.asyncHttpService.get(environment.apiDomain + '/login.json', { params: this.loginForm.value.email }).subscribe(data => {
      sessionStorage.setItem('token', data.token);
      this.router.navigate(['content'])
    })
  }

}
