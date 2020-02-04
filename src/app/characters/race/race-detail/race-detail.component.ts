import {Component, Input, OnInit} from '@angular/core';
import {Race} from "../../characters.interfaces";

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  @Input() race: Race;

  constructor() { }

  ngOnInit() {
  }

}
