import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-name-dialog',
  templateUrl: './character-name-dialog.component.html',
  styleUrls: ['./character-name-dialog.component.scss']
})
export class CharacterNameDialogComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
