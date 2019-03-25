import { Component, OnInit } from '@angular/core';
import { Book } from '../book.class';
import { BookService } from '../book.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	books: Book[] = [];
	constructor(private bookService: BookService) {}

	ngOnInit() {
		this.getBooks();
	}

	getBooks(): void {
		let tableName = 'books';
		this.bookService.getBooks(tableName).subscribe((books) => (this.books = books.slice(0, 4)));
	}
}
