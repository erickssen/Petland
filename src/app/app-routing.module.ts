import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuppiesComponent } from './puppies/puppies.component';

const routes: Routes = [
  { path: '', redirectTo: '/puppies', pathMatch: 'full'},
  { path: 'puppies', component: PuppiesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
