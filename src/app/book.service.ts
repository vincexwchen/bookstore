import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book.class';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class BookService {
	private booksUrl = 'http://localhost:8888'; // URL to web api
	constructor(private http: HttpClient, private messageService: MessageService) {}
	getBooks(tableName): Observable<Book[]> {
		const url = `${this.booksUrl}/${tableName}`;
		//console.log(url);
		//console.log(this.http.get<Book[]>(this.booksUrl))
		return this.http
			.put<Book[]>(url, tableName)
			.pipe(catchError(this.handleError<Book[]>(`getBooks table=${tableName}`)));
	}
	getBook(id: number): Observable<Book> {
		const url = `${this.booksUrl}/${id}`;
		//console.log(url);
		return this.http.get<Book>(url, httpOptions).pipe(catchError(this.handleError<Book>(`getBook id=${id}`)));
	}

	deleteBook(id: number): Observable<Book> {
		//book_id;
		const url = `${this.booksUrl}/${id}`;
		//console.log(url, httpOptions);
		return this.http.delete<Book>(url, httpOptions).pipe(catchError(this.handleError<Book>('deleteBook')));
	}

	addBook(
		bookId: number,
		bookName: string,
		bookAuthor: string,
		bookPublishTime: Date,
		bookCover: string
	): Observable<Book> {
		const url = `${this.booksUrl}/insert`;
		let book = new Book();
		book.book_id = bookId;
		book.book_name = bookName;
		book.book_author = bookAuthor;
		book.book_ptime = bookPublishTime;
		book.book_cover = bookCover;
		let bookJson = JSON.stringify(book);
		return this.http.post<Book>(url, bookJson, httpOptions).pipe(catchError(this.handleError<Book>('addBook')));
	}
	updateBook(book: Book) {
		const url = `${this.booksUrl}/update`;
		//console.log(book);
		let bookJson = JSON.stringify(book);
		//console.log(bookJson);
		return this.http.post<Book>(url, bookJson, httpOptions).pipe(catchError(this.handleError<Book>('addBook')));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	private log(message: string) {
		this.messageService.add(`BookService: ${message}`);
	}
}
