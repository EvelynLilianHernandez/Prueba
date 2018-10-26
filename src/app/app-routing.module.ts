import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './user/components/add/add.component';
import { EditComponent } from './user/components/edit/edit.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes =  [
  {
    path:'',
    children:[
      {
        path:'auth', loadChildren:'./auth/auth.module#AuthModule'
      },  
      {
        path:'user', loadChildren:'./user/user.module#UserModule'
      },
    ]
  },
]; 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
