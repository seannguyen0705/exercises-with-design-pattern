/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */
import { Book } from "./Book";
import { Library } from "./Library";

let lib: Library;
lib = new Library();

let book1: Book;
book1 = new Book("Clean Code", "Edric Cao", 2023);

let book2: Book;
book2 = new Book("Design Pattern", "Edric Cao", 2022);

lib.addBook(book1);
lib.addBook(book2);
console.log(lib.getSearchBook().getBookByTitle("Clean Code")); // Output: Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }
