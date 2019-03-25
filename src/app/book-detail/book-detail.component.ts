import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.class';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { NgModel } from '@angular/forms';
@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent implements OnInit {
	@Input() book: Book;
	constructor(private route: ActivatedRoute, private bookService: BookService, private location: Location) {}

	getBook(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		//console.log(id);
		this.bookService.getBook(id).subscribe((book) => (this.book = book));
	}
	goBack(): void {
		this.location.back();
	}
	save(): void {
		this.bookService.updateBook(this.book).subscribe(() => this.goBack());
	}
	ngOnInit() {
		this.getBook();
	}
}
