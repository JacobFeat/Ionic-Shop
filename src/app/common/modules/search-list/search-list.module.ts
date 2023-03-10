import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list.component';

@NgModule({
  declarations: [SearchListComponent],
  imports: [CommonModule],
  exports: [SearchListComponent],
})
export class SearchListModule {}
