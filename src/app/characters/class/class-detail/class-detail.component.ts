import {Component, Input, OnInit} from '@angular/core';
import {Class} from "../../characters.interfaces";

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit() {
  }

}
