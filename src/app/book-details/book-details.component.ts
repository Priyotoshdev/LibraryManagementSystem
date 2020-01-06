import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { BookListComponent } from '../book-list/book-list.component';
import { Book } from '../books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book : Book ;

  constructor(private bookService: BookService, private listComponent: BookListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.bookService.updateBook(this.book.id,
      { title: this.book.title, author_Name: this.book.author_Name, publisher: this.book.publisher, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.book = data as Book;
        },
        error => console.log(error));
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}


