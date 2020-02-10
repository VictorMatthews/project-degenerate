import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Ui } from './shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('menu', {static: false}) menu: MatSidenav;

  constructor(public ui: Ui, matIconRegistry: MatIconRegistry) {

    matIconRegistry.registerFontClassAlias('fa');
    matIconRegistry.registerFontClassAlias('fab');

    this.ui.target.subscribe(data => {
      setTimeout(() => {
        this.closeSideNav();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
  }

  closeSideNav() {
    if (this.ui.isMobile()) {
      this.menu.close();
    }
  }
}
