import { Component, OnInit } from '@angular/core';
import { Book } from '../book.class';
import { BookService } from '../book.service';
@Component({
	selector: 'app-bought-books',
	templateUrl: './bought-books.component.html',
	styleUrls: [ './bought-books.component.css' ]
})
export class BoughtBooksComponent implements OnInit {
	books: Book[];
	constructor(private bookService: BookService) {}

	ngOnInit() {
		this.getBooks();
	}

	getBooks(): void {
		let tableName = 'bought_books';
		this.bookService.getBooks(tableName).subscribe((books) => (this.books = books));
	}
}
