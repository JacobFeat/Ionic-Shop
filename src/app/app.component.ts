import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppPaths } from './common/config/app-paths';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  AppPaths = AppPaths;

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    this.translate.setDefaultLang('pl');
  }
}
