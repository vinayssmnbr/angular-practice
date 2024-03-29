import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todoform/todoform.component';

const routes: Routes = [
  // {
  //   path:'/',
  //   component:AppComponent

  // },
  {
  path:'first',
  component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'third',
    component:ThirdComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
  path:'child',
  component:ChildComponent
  },
  {
  path:'todo',
  component:TodoComponent
  },
  {
    path:'todoform',
    component:TodoformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
