import { Component, OnInit } from '@angular/core';
import { Book } from '../book.class';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: [ './books.component.css' ]
})
export class BooksComponent implements OnInit {
	books: Book[];
	constructor(private bookService: BookService, private router: Router) {}

	getBooks(): void {
		let tableName = 'books';
		this.bookService.getBooks(tableName).subscribe((books) => (this.books = books));
	}
	delete(id: number): void {
		/*   const id = +this.route.snapshot.paramMap.get('id'); */
		/*     this.bookService.getBook(id).subscribe(book => this.book = book);
    this.books = this.books.filter(b => b !== book); */
		this.books = this.books.filter((b) => b.book_id !== id);
		this.bookService.deleteBook(id).subscribe();
		//setTimeout(function(){this.router.navigate([ "/books" ])},1000);
	}
	ngOnInit() {
		this.getBooks();
	}
}
