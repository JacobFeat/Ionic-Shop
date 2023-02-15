import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../common/defs/language.defs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  protected currentLanguage: Language = 'pl';

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  onChangeLanguage(language: Language) {
    this.currentLanguage = language;
    this.translate.use(this.currentLanguage);
  }
}
