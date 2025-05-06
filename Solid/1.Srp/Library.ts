import { Book } from "./Book";
import { SearchBook } from "./SearchBook";

export class Library {
  private books: Book[];
  private searchBook: SearchBook;
  constructor() {
    this.books = [];
    this.searchBook = new SearchBook(this.books);
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }
  public getListBooks(): Book[] {
    return this.books;
  }

  public getSearchBook(): SearchBook {
    return this.searchBook;
  }

  public getTotalNumberOfBooks(): number {
    return this.books.length;
  }
}
