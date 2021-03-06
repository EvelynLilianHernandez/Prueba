import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path:'add', component:AddComponent
  },
  {
    path:'edit/:id', component:EditComponent
  },
  {
    path:'list', component:ListComponent
  },
  {
    path:'getUserByEmail/:Email', component:ListComponent
  },
  /* {
    path:'clear/:id', component:ClearComponent
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
