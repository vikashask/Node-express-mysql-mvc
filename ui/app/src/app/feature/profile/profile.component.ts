import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AsyncHttpService } from '../../provider/async-http.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private asyncHttpService: AsyncHttpService) { }

  ngOnInit() {
    this.getProfileData();
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getProfileData() {
    this.asyncHttpService.get(environment.apiDomain + `/profile/get-profile/${JSON.parse(sessionStorage.getItem('token')).email_id}`).subscribe(data => {
      this.patchProfileValue(data.response)
    })
  }

  patchProfileValue(data) {
    this.loginForm.patchValue({
      firstName: data.first_name,
      lastName: data.last_name,
      email_id: data.email_id,
      phoneNumber: data.phone_number
    })
  }
  login() {
    console.log(this.loginForm.value)
  }
}
