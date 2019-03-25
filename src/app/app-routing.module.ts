import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoughtBooksComponent } from './bought-books/bought-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'books',
		component: BooksComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'bought-books',
		component: BoughtBooksComponent
	},
	{
		path: 'detail/:id',
		component: BookDetailComponent
	},
	{
		path: 'new-book',
		component: NewBookComponent
	},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
