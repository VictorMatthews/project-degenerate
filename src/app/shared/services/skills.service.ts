import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  readonly PROF_BONUS = 2;

  constructor() { }

  public getAttributeIncease(attributeValue: number): number {
    if (attributeValue === 1) {
      return -5;
    }
    if (attributeValue === 2 || attributeValue === 3) {
      return -4;
    }
    if (attributeValue === 4 || attributeValue === 5) {
      return -3;
    }
    if (attributeValue === 6 || attributeValue === 7) {
      return -2;
    }
    if (attributeValue === 8 || attributeValue === 9) {
      return -1;
    }
    if (attributeValue === 10 || attributeValue === 11) {
      return 0;
    }
    if (attributeValue === 12 || attributeValue === 13) {
      return 1;
    }
    if (attributeValue === 14 || attributeValue === 15) {
      return 2;
    }
    if (attributeValue === 16 || attributeValue === 17) {
      return 3;
    }
    if (attributeValue === 18 || attributeValue === 19) {
      return 4;
    }
    if (attributeValue === 20 || attributeValue === 21) {
      return 5;
    }
    if (attributeValue === 22 || attributeValue === 23) {
      return 6;
    }
    if (attributeValue === 24 || attributeValue === 35) {
      return 7;
    }
    if (attributeValue === 26 || attributeValue === 27) {
      return 8;
    }
    if (attributeValue === 28 || attributeValue === 29) {
      return 9;
    }
    if (attributeValue === 30) {
      return 10;
    }
  }
}
