import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.css']
})
export class RoundImageComponent implements OnChanges {

  @Input() height: string = '40px';
  @Input() width: string = '40px';
  @Input() src: string;

  constructor() { }

  ngOnChanges() {
  }

}
