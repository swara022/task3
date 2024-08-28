const books = [
    { title: 'The Great Gatsby', category: 'Fiction', borrowed: false },
    { title: '1984', category: 'Sci-Fi', borrowed: true },
    { title: 'Becoming', category: 'Biography', borrowed: false },
    { title: 'Sapiens', category: 'Non-Fiction', borrowed: true },
    { title: 'Chhava', category: 'Novel', borrowed: true },
];

const borrowingHistory = [
    { title: '1984', date: '2024-01-10' },
    { title: 'Sapiens', date: '2024-02-05' },
    { title: 'Chhava', date: '2024-03-06' },
];

function renderBooks() {
    const bookList = document.getElementById('bookList');
    const categorySelect = document.getElementById('categorySelect').value.toLowerCase();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    bookList.innerHTML = '';

    books.forEach(book => {
        if ((categorySelect === '' || book.category.toLowerCase() === categorySelect) &&
            book.title.toLowerCase().includes(searchInput)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} (${book.category}) - ${book.borrowed ? 'Borrowed' : 'Available'}`;
            bookList.appendChild(listItem);
        }
    });
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    borrowingHistory.forEach(history => {
        const listItem = document.createElement('li');
        listItem.textContent = `${history.title} - Borrowed on ${history.date}`;
        historyList.appendChild(listItem);
    });
}

document.getElementById('searchInput').addEventListener('input', renderBooks);
document.getElementById('categorySelect').addEventListener('change', renderBooks);

// Initial render
renderBooks();
renderHistory();