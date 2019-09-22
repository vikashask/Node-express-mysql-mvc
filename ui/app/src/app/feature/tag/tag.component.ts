import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
export interface BulkAction {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  slug: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', description: 'test', slug: 'H'},
  {position: 2, name: 'Helium', description: 'test', slug: 'He'},
];

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tagForm: FormGroup;
  bluckAcs: BulkAction[] = [
    {value: 'Delete', viewValue: 'Delete'},
    {value: 'Edit', viewValue: 'Edit'},
    {value: 'trash', viewValue: 'Move to Trash'}
  ];
  name = new FormControl('', [Validators.required]);
  slug = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);


  // table props
  displayedColumns: string[] = ['select', 'position', 'name', 'description', 'slug'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.tagForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   slug: ['', Validators.required],
    //   description: ['', Validators.required]
    // })
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' :
        this.name.hasError('name') ? 'Not a valid name' :
            '';
  }

  getSlugErrorMessage() {
    return this.slug.hasError('required') ? 'You must enter a value' :
        this.slug.hasError('name') ? 'Not a valid name' :
            '';
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  addTag() {
    console.log(this.name.value);

  }
}
