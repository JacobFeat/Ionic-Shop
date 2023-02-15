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
  protected cancelText!: string;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.cancelText = 'Anuluj';
  }

  onChangeLanguage(language: Language) {
    this.translate.use(this.currentLanguage);
    this.setCancelText(language);
    this.currentLanguage = language;
  }

  // TODO to do zmiany - sprawdzic buga z nieładowaniem się od razu translation dla 'Cancel'
  private setCancelText(language: Language): void {
    if ((language = 'en')) {
      this.cancelText = 'Cancel';
    } else {
      this.cancelText = 'Anuluj';
    }
  }
}
