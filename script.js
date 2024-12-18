// Random kitoblar ro'yxatini yaratish va localStorage bilan ishlash
document.addEventListener("DOMContentLoaded", () => {
    const defaultBooks = [
      { title: "1984", author: "Jorj Oruell" },
      { title: "Yo'l", author: "Ray Bradberi" },
      { title: "Sariq Devonaning Xotiralari", author: "Abdulla Qodiriy" },
      { title: "Alximik", author: "Paulo Koelo" },
      { title: "Qashqirlar bilan Yuguruvchi Ayol", author: "Klariys Pinkola" },
      { title: "O'tgan Kunlar", author: "Abdulla Qodiriy" },
      { title: "Harry Potter", author: "J.K. Rouling" },
      { title: "Qo'rqma", author: "Robin Sharma" }
    ];
  
    // Kitoblar konteyneri
    const booksContainer = document.getElementById("books-container");
  
    // LocalStorage-dan kitoblarni olish yoki default kitoblar bilan to'ldirish
    function loadBooks() {
      const booksFromStorage = JSON.parse(localStorage.getItem("books")) || defaultBooks;
      booksContainer.innerHTML = ""; // Eski kitoblarni tozalash
      booksFromStorage.forEach(book => addBookToDOM(book));
    }
  
    // DOMga kitob qo'shish
    function addBookToDOM(book) {
      const bookCard = document.createElement("div");
      bookCard.className = "book-card";
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Muallif: ${book.author}</p>
      `;
      booksContainer.appendChild(bookCard);
    }
  
    // Yangi kitob qo'shish
    function addBook(title, author) {
      const newBook = { title, author };
      const booksFromStorage = JSON.parse(localStorage.getItem("books")) || [];
      booksFromStorage.push(newBook);
      localStorage.setItem("books", JSON.stringify(booksFromStorage));
      addBookToDOM(newBook);
    }
  
    // Kitob qo'shish formasi bilan ishlash
    const addBookForm = document.getElementById("add-book-form");
    if (addBookForm) {
      addBookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("book-title").value.trim();
        const authorInput = document.getElementById("book-author").value.trim();
        if (titleInput && authorInput) {
          addBook(titleInput, authorInput);
          addBookForm.reset(); // Formani tozalash
        } else {
          alert("Iltimos, kitob nomi va muallifini kiriting!");
        }
      });
    }
  
    // Sahifa yuklanganda kitoblarni yuklash
    loadBooks();
  });
  