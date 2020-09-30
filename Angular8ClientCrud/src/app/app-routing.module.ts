import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DieSetsListComponent } from './components/die-sets-list/die-sets-list.component';
import { DetailsComponent } from './components/die-set/details/details.component';
import { AddDieSetComponent } from './components/add-die-set/add-die-set.component';


const routes: Routes = [
  { path: '', redirectTo: 'dieSets', pathMatch: 'full' },
  { path: 'dieSets', component: DieSetsListComponent },
  { path: 'dieSets/:id', component: DetailsComponent },
  { path: 'add', component: AddDieSetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
