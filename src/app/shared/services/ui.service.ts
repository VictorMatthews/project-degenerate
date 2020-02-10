import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Paragraphs } from '../constants/paragraphs';
import { Ids } from '../constants/ids';
import { Subject } from 'rxjs';
import { UiUtil } from './ui-util';
import {Alignments} from "../constants/character/alignments";
import {Attributes} from "../constants/character/attributes";
import {Races, SubRaces} from "../constants/character/races";
import {Skills} from "../constants/character/skills";
import {Backgrounds, Bonds, Flaws, Ideals, PersonalityTraits} from "../constants/character/backgrounds";
import {Classes} from "../constants/character/classes";

@Injectable({
  providedIn: 'root'
})
export class Ui {
  CONSTANTS = new Constants();
  PARAGRAPHS = new Paragraphs();
  ID = new Ids();
  target = new Subject();
  alignments = new Alignments();
  attributes = new Attributes();
  races = new Races();
  subRaces = new SubRaces();
  skills = new Skills();
  backgrounds = new Backgrounds();
  bonds = new Bonds();
  flaws = new Flaws();
  ideals = new Ideals();
  personalityTraits = new PersonalityTraits();
  classes = new Classes();

  constructor() {
    this.target.subscribe( id => {
      if (id != null) {
        this.scroll(id as string);
      }
    });
  }

  public scroll(id: string) {
    const el = document.getElementsByClassName(id).item(0);
    el.scrollIntoView({behavior: 'smooth'});
  }

  isMobile(): boolean {
    return !UiUtil.isDesktop();
  }

  isNullOrUndefined(...object: any[]) {
    for (const element of object) {
      if (element === undefined || element === null) {
        return true;
      }
    }
    return false;
  }

  isNullOrUndefinedOrBlank(o: any) {
    if (this.isNullOrUndefined(o)) {
      return true;
    } else if (o.toString().trim() === "") {
      return true;
    }
    return false;
  }


}
