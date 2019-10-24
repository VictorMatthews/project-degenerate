import { Injectable } from '@angular/core';
import { NavigationConstants, NavigationLink } from './menu.interface';
import { Ui } from '../shared/services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public ui: Ui) { }

  populateNavigationLinks(callback: (result: NavigationLink[]) => void) {
      callback(
        [
          {
            path: this.ui.ID.HOME.getString(),
            navType: NavigationConstants.SCROLL,
            className: this.ui.ID.HOME.getClassName(),
            fontSet: this.ui.CONSTANTS.HOME.getFaSet(),
            fontIcon: this.ui.CONSTANTS.HOME.getFaIcon(),
            label: this.ui.CONSTANTS.HOME.getString(),
          },
          {
            path: this.ui.ID.WEAPONS.getString(),
            navType: NavigationConstants.NAVIGATE_TO,
            className: this.ui.ID.WEAPONS.getClassName(),
            fontSet: this.ui.CONSTANTS.WEAPONS.getFaSet(),
            fontIcon: this.ui.CONSTANTS.WEAPONS.getFaIcon(),
            label: this.ui.CONSTANTS.WEAPONS.getString(),
          },
          {
            path: this.ui.ID.CHARACTERS.getString(),
            navType: NavigationConstants.NAVIGATE_TO,
            className: this.ui.ID.CHARACTERS.getClassName(),
            fontSet: this.ui.CONSTANTS.CHARACTERS.getFaSet(),
            fontIcon: this.ui.CONSTANTS.CHARACTERS.getFaIcon(),
            label: this.ui.CONSTANTS.CHARACTERS.getString(),
          },
        ]
      );
  }
}
