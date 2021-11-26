import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PersonsComponent],
  imports: [CommonModule, TableModule],
  exports: [PersonsComponent],
})
export class PersonsModule {}
