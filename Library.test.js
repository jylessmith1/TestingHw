const Library = require("./Library");

describe("The Library", () => {
  let library;
  const book1 = "Book 1";
  const book2 = "Book 2";
  const book3 = "Book 3";

  beforeEach(() => {
    library = new Library();
  });
  test("should be able to add books to its inventory", () => {
    library.addBook(book1);
    expect(library.displayInventory()).toEqual([book1]);
  });

  test("should be able to check out a book to a patron", () => {
    library.addBook(book1);
    library.addBook(book2);
    expect(library.issueBook(book1)).toBe(true);
    expect(library.displayInventory()).toEqual([book2]);
  });



});
