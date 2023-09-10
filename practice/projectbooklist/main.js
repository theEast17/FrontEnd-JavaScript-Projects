const book_form = document.querySelector("#book-form");

// add book
class book {
  constructor(bookTitle, bookAuthor, bookId) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookId = bookId;
  }
}

book_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector(".BookTitle").value;
  const bookAuthor = document.querySelector(".BookAuthor").value;
  const bookId = document.querySelector(".BookId").value;

  if(bookTitle==='' || bookId==='' || bookAuthor === ''){
    ui.showElert("Please fill first");
  }
  else{
    let bookItem = new book(bookTitle, bookAuthor, bookId);

    ui.addBooktoList(bookItem);

    // add books to store
    Store.addBook(bookItem);

    ui.showElert("Book is added Succesfully")
    
    ui.clearFields();
  }

  
});



// ui part
class ui {
  static displayBook() {
    // const bookObject = [
    //   {
    //     bookTitle: "abc",
    //     bookAuthor: "poorv Nagar",
    //     bookId: 121,
    //   },
    //   {
    //     bookTitle: "abcd",
    //     bookAuthor: "shubham Nagar",
    //     bookId: 122,
    //   },
    //   {
    //     bookTitle: "abcde",
    //     bookAuthor: "vibha Nagar",
    //     bookId: 123,
    //   },
    // ];

    // const allBook = bookObject;
    const allBook=Store.getBooks();
    allBook.forEach((book) => {
      ui.addBooktoList(book);
    });
  }
  static addBooktoList(book) {
    const list = document.querySelector(".bookList");

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${book.bookTitle}</td>
        <td>${book.bookAuthor}</td>
        <td>${book.bookId}</td>
        <td><a href="" class="delete">delete</a></td>
        `;
    list.appendChild(tr);
  }

  static deletebook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showElert(message){
    const div=document.createElement('div')
    div.className='alertDiv'
    div.appendChild(document.createTextNode(message))
    const container=document.querySelector('.container')

    container.insertBefore(div,book_form)
    setTimeout(()=>{
        document.querySelector('.alertDiv').remove();
    },1900)
  }

  static clearFields() {
    document.querySelector(".BookTitle").value = "";
    document.querySelector(".BookAuthor").value = "";
    document.querySelector(".BookId").value = "";
  }
}

document.addEventListener("DOMContentLoaded", ui.displayBook);


// Event Remove Book
document.querySelector(".bookList").addEventListener("click", (e) => {
  e.preventDefault();
  ui.deletebook(e.target);
  ui.showElert('Deleted Successfully')

//   remove book from store
  Store.removebooks(e.target.parentElement.previousElementSibling.textContent);

});


class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[]
        }
        else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }

    static removebooks(id){
        const books=Store.getBooks();
        books.forEach((book,index)=>{
            if(book.bookId === id){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books))
    }


}