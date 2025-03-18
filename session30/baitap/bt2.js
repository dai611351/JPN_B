let bookstore = [
    { bookId: 1, title: "Chúng ta của sau này", price: 20000, stock: 20, genre: "Tâm sự" },
    { bookId: 2, title: "Harry Potter", price: 80000, stock: 21, genre: "Phép thuật" },
    { bookId: 3, title: "Cuộc sống IT", price: 550000, stock: 15, genre: "Tâm sự" },
];

let cart = [];
let userChoice;
let menu = `
  1. Hiển thị danh sách sách theo thể loại
  2. Thêm sách mới vào kho
  3. Tìm kiếm sách theo tên hoặc ID
  4. Mua sách
  5. Sắp xếp sách theo giá
  6. Tổng số lượng sách đã mua & tổng tiền
  7. Tổng số lượng sách trong kho
  8. Thoát chương trình
  Nhập lựa chọn của bạn: 
`;

while (userChoice !== 8) {
    userChoice = +prompt(menu);
    switch (userChoice) {
        case 1:
            displayBooksByGenre();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            purchaseBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            calculateTotal();
            break;
        case 7:
            displayStock();
            break;
        case 8:
            console.log("Bạn đã thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}

// Hiển thị sách theo thể loại
function displayBooksByGenre() {
    let selectedGenre = prompt("Nhập thể loại bạn muốn xem: ");
    let filteredBooks = bookstore.filter(book => book.genre.toLowerCase() === selectedGenre.toLowerCase());
    if (filteredBooks.length !== 0) {
        console.table(filteredBooks);
    } else {
        console.log("Không tìm thấy thể loại này!");
    }
}

// Thêm sách mới
function addNewBook() {
    let bookTitle = prompt("Nhập tên sách: ");
    let bookPrice = +prompt("Nhập giá sách: ");
    let bookStock = +prompt("Nhập số lượng sách: ");
    let bookGenre = prompt("Nhập thể loại sách: ");
    let newBook = {
        bookId: Math.random(),
        title: bookTitle,
        price: bookPrice,
        stock: bookStock,
        genre: bookGenre,
    };
    bookstore.push(newBook);
    console.log("Thêm sách thành công!");
}

// Tìm kiếm sách theo ID hoặc tên
function searchBook() {
    let searchChoice = prompt("1. Tìm theo ID\n2. Tìm theo tên\nNhập lựa chọn: ");
    let found = false;
    if (searchChoice === "1") {
        let searchId = +prompt("Nhập ID sách: ");
        for (let book of bookstore) {
            if (book.bookId === searchId) {
                console.table(book);
                found = true;
                break;
            }
        }
    } else if (searchChoice === "2") {
        let searchTitle = prompt("Nhập tên sách: ");
        for (let book of bookstore) {
            if (book.title.toLowerCase() === searchTitle.toLowerCase()) {
                console.table(book);
                found = true;
                break;
            }
        }
    }
    if (!found) {
        console.log("Không tìm thấy sách!");
    }
}

// Mua sách
function purchaseBook() {
    let purchaseId = +prompt("Nhập ID sách muốn mua: ");
    let bookIndex = bookstore.findIndex(book => book.bookId === purchaseId);
    if (bookIndex === -1) {
        console.log("Sách không tồn tại!");
    } else {
        let purchaseQuantity = +prompt(`Nhập số lượng muốn mua (${bookstore[bookIndex].title}): `);
        if (purchaseQuantity > 0 && purchaseQuantity <= bookstore[bookIndex].stock) {
            bookstore[bookIndex].stock -= purchaseQuantity;
            let cartItem = {
                title: bookstore[bookIndex].title,
                price: bookstore[bookIndex].price,
                quantity: purchaseQuantity,
                genre: bookstore[bookIndex].genre,
            };
            cart.push(cartItem);
            console.log("Mua thành công!");
            console.table(cart);
        } else {
            console.log("Số lượng không hợp lệ!");
        }
    }
}

// Sắp xếp sách theo giá
function sortBooksByPrice() {
    let sortChoice = prompt("1. Giá tăng dần\n2. Giá giảm dần\nNhập lựa chọn: ");
    if (sortChoice === "1") {
        bookstore.sort((a, b) => a.price - b.price);
        console.log("Sắp xếp theo giá tăng dần:");
    } else if (sortChoice === "2") {
        bookstore.sort((a, b) => b.price - a.price);
        console.log("Sắp xếp theo giá giảm dần:");
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
    console.table(bookstore);
}

// Tính tổng số tiền giỏ hàng
function calculateTotal() {
    let totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền giỏ hàng: ${totalAmount} VND`);
}

// Hiển thị tổng số sách trong kho
function displayStock() {
    let totalStock = bookstore.reduce((sum, book) => sum + book.stock, 0);
    console.log(`Tổng số sách trong kho: ${totalStock}`);
}