import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ingredientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      description: ['', Validators.required]
    })


  }
  AddIngredient() {

  }


}
