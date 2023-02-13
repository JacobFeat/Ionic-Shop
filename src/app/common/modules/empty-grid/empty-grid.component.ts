import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-grid',
  templateUrl: './empty-grid.component.html',
  styleUrls: ['./empty-grid.component.scss'],
})
export class EmptyGridComponent implements OnInit {
  @Input() message!: string;
  @Input() iconFileName!: string;
  @Input() infoPosition: 'top' | 'center' = 'center';

  constructor() {}

  ngOnInit() {}
}
