
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

const route: Routes = [
  {
    path:'',
    redirectTo: '/post-list',
    pathMatch: 'full'
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path:'post-add',
    component:PostEditComponent
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent
    
  },
  {
    path:'auth',
    component: AuthComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
