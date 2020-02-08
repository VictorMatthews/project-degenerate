import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Paragraphs } from '../constants/paragraphs';
import { Ids } from '../constants/ids';
import { Subject } from 'rxjs';
import { UiUtil } from './ui-util';

@Injectable({
  providedIn: 'root'
})
export class Ui {
  CONSTANTS = new Constants();
  PARAGRAPHS = new Paragraphs();
  ID = new Ids();
  target = new Subject();

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
