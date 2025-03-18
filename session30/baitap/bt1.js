let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let cart = [];

// Hiển thị sản phẩm theo danh mục
function show() {
    let categoryChoice = +prompt(`Nhập danh mục cần xem:
    1: các món ăn dân tộc Kinh
    2: các món ăn dân tộc Mông
    `);
    if (categoryChoice === 1) {
        let result = products.filter(product => product.category === "món ăn dân tộc Kinh");
        console.log("Danh sách sản phẩm (Kinh):", result);
    } else if (categoryChoice === 2) {
        let result = products.filter(product => product.category === "món ăn dân tộc Mông");
        console.log("Danh sách sản phẩm (Mông):", result);
    } else {
        console.log("Lựa chọn không tồn tại");
    }
}

// Chọn mua sản phẩm
function choseProducts() {
    let choseId = prompt('Mời bạn nhập id sản phẩm: ');
    let productId = parseInt(choseId);
    // Tìm vị trí sản phẩm trong mảng products
    let indexProduct = products.findIndex(product => product.id === productId);
    if (indexProduct === -1) {
        console.log('Sản phẩm không có trong cửa hàng');
    } else {
        let choseQuantity = +prompt('Mời bạn nhập số lượng sản phẩm muốn mua: ');
        if (products[indexProduct].quantity < choseQuantity) {
            console.log(`Sản phẩm chỉ còn ${products[indexProduct].quantity}`);
        } else {
            // Cập nhật số lượng trong kho
            products[indexProduct].quantity -= choseQuantity;
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            let indexInCart = cart.findIndex(item => item.id === productId);
            if (indexInCart === -1) {
                // Thêm sản phẩm vào giỏ hàng
                cart.push({
                    id: productId,
                    name: products[indexProduct].name,
                    price: products[indexProduct].price,
                    quantity: choseQuantity,
                    category: products[indexProduct].category
                });
            } else {
                // Cập nhật số lượng nếu đã có trong giỏ hàng
                cart[indexInCart].quantity += choseQuantity;
            }
            console.log("Mua sản phẩm thành công!");
            console.log("Giỏ hàng hiện tại:", cart);
        }
    }
}

// Sắp xếp sản phẩm theo giá
function sortProducts() {
    let sortChoice = +prompt(`Chọn kiểu sắp xếp:
    1: Giá tăng dần
    2: Giá giảm dần
    `);
    if (sortChoice === 1) {
        products.sort((a, b) => a.price - b.price);
        console.log("Sản phẩm sắp xếp theo giá tăng dần:");
        console.log(products);
    } else if (sortChoice === 2) {
        products.sort((a, b) => b.price - a.price);
        console.log("Sản phẩm sắp xếp theo giá giảm dần:");
        console.log(products);
    } else {
        console.log("Lựa chọn sắp xếp không hợp lệ");
    }
}

// Tính tổng số tiền thanh toán trong giỏ hàng
function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Tổng số tiền thanh toán: ${total}`);
}

// Vòng lặp chính của chương trình
let choice;
do {
    choice = +prompt(`
    1. Hiển thị các sản phẩm theo danh mục.
    2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
       (Nếu số lượng mua vượt quá hoặc sản phẩm không tồn tại sẽ hiển thị thông báo)
    3. Sắp xếp các sản phẩm theo giá (Tăng dần hoặc Giảm dần).
    4. Tính số tiền thanh toán trong giỏ hàng.
    5. Thoát.
    Nhập lựa chọn của bạn: `);
    
    switch (choice) {
        case 1:
            show();
            break;
        case 2:
            choseProducts();
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            calculateTotal();
            break;
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 5);
