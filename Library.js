class Library {
    constructor() {
        this.inventory = [];
    }

    addBook(book) {
        this.inventory.push(book);
    }

    issueBook(book) {
        const index = this.inventory.indexOf(book);
        if (index !== -1) {
            this.inventory.splice(index, 1);
            return true;
        }
        return false;
    }

}

module.exports = Library;
