import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoughtBooksComponent } from './bought-books/bought-books.component';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
	declarations: [
		AppComponent,
		BooksComponent,
		BookDetailComponent,
		MessagesComponent,
		DashboardComponent,
		BoughtBooksComponent,
		NewBookComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgZorroAntdModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule
	],
	providers: [ { provide: NZ_I18N, useValue: zh_CN } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
