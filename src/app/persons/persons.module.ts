import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';

@NgModule({
  declarations: [PersonsComponent],
  imports: [CommonModule],
  exports: [PersonsComponent],
})
export class PersonsModule {}
