import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  protected loadedCategories!: Category[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.loadedCategories = this.categoriesService.categories;
  }
}
