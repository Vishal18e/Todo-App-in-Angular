import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';;
import { MainTodoComponent } from './main-todo/main-todo.component';
import { LoginModuleComponent } from './login-module/login-module.component';
const routes: Routes = [
  {path:'',component:MainTodoComponent},
  {path:'goInfo',component: InfoComponent},
  {path:'login',component:LoginModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
