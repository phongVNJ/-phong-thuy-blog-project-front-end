import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogAddComponent } from './blog-add/blog-add.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {path:':id/blogDetail',component:BlogDetailComponent},
  {path: 'create',component: BlogAddComponent}
];

@NgModule({
  declarations: [
    BlogsComponent,BlogDetailComponent, BlogAddComponent
  ],
  exports: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BlogsModule {
}
