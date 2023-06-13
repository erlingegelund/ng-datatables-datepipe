import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
