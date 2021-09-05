import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTodoComponent } from './main-todo/main-todo.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { FormsModule } from '@angular/forms';
import { DelTodoComponent } from './del-todo/del-todo.component';
import { InfoComponent } from './info/info.component';
import { TestComponent } from './test/test.component';
import { LoginModuleComponent } from './login-module/login-module.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoComponent,
    DisplayTodoComponent,
    AddNewTodoComponent,
    DelTodoComponent,
    InfoComponent,
    TestComponent,
    LoginModuleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
