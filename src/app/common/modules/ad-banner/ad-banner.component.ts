import { Component, Input, OnInit } from '@angular/core';
import { Ad } from '../../defs/ad.defs';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {
  @Input() ad!: Ad | undefined;

  constructor() {}

  ngOnInit() {}
}
