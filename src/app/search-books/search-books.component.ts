import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  title: string;
  books: Book[];

  constructor(private dataService: BookService) { }

  ngOnInit() {
    this.title = "";
  }

  private searchBooks() {
    this.books = [];
    this.dataService.getBooksByTitle(this.title)
      .subscribe(books => this.books = books);
  }

  onSubmit() {
    this.searchBooks();
  }

}

