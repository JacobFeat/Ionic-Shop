import { Component } from '@angular/core';
import { AppPaths } from './common/config/app-paths';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  AppPaths = AppPaths;

  constructor() {}
}
