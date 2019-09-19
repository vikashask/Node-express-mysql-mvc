import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tagForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tagForm = this.formBuilder.group({
      name: ['', Validators.required],
      slug: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  addTag() {

  }
}
