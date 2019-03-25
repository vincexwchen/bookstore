import { Component, OnInit } from '@angular/core';
import { Book } from '../book.class';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-new-book',
	templateUrl: './new-book.component.html',
	styleUrls: [ './new-book.component.css' ]
})
export class NewBookComponent implements OnInit {
	books: Book[];
	constructor(private bookService: BookService, private router: Router) {}

	ngOnInit() {}

	add(Id: number, Name: string, Author: string, PublishTime: Date, Cover: string): void {
		//console.log(Id, Name, Author, PublishTime, Cover);
		//var ptime = new Date(PublishTime.getFullYear(), (PublishTime.getMonth()+1), PublishTime.getDate())
		//console.log(ptime);
		//let PublishTime = book_ptime;
		this.bookService
			.addBook(Id, Name, Author, PublishTime, Cover)
			.subscribe(() => this.router.navigateByUrl('/books'));
	}
}
