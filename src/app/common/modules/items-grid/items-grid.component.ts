import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../defs/product-defs';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {

  @Input() products!: Product[];

  constructor() { }

  ngOnInit() {}

}
