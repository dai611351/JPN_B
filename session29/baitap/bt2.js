let arr = []; 


function add() {
    let id = arr.length + 1;  
    let name = prompt("Mời bạn nhập tên sản phẩm:");
    let price = +prompt("Mời bạn nhập giá sản phẩm:");
    let category = prompt("Mời bạn nhập danh mục sản phẩm:");
    let quantity = +prompt("Mời bạn nhập số lượng sản phẩm:");
  
    if (isNaN(price) || price <= 0) {
        console.log("Giá không hợp lệ. Vui lòng nhập lại.");
        return;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
        console.log("Số lượng không hợp lệ. Vui lòng nhập lại.");
        return;
    }

    arr.push({id, name, price, category, quantity});
    console.log("Đã thêm sản phẩm vào danh sách!");
}
function show() {
    if (arr.length === 0) {
        console.log("Danh sách sản phẩm trống.");
    } else {
        console.log("Danh sách sản phẩm:");
        arr.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
        });
    }
}
function showDetailById() {
    let id = +prompt("Mời bạn nhập ID sản phẩm cần xem chi tiết:");
    let product = arr.find(p => p.id === id);
    
    if (product) {
        console.log(`Chi tiết sản phẩm: ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}
function update() {
    let id = +prompt("Mời bạn nhập ID sản phẩm cần cập nhật:");
    let product = arr.find(p => p.id === id);
    
    if (product) {
        product.name = prompt("Mời bạn nhập tên mới:", product.name);
        product.price = +prompt("Mời bạn nhập giá mới:", product.price);
        product.category = prompt("Mời bạn nhập danh mục mới:", product.category);
        product.quantity = +prompt("Mời bạn nhập số lượng mới:", product.quantity);
        
        console.log("Cập nhật thông tin sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}
function remove() {
    let id = +prompt("Mời bạn nhập ID sản phẩm cần xóa:");
    let index = arr.findIndex(p => p.id === id);
    
    if (index !== -1) {
        arr.splice(index, 1);
        console.log("Đã xóa sản phẩm.");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}
function filterByPrice() {
    let minPrice = +prompt("Mời bạn nhập giá tối thiểu:");
    let maxPrice = +prompt("Mời bạn nhập giá tối đa:");

    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
        console.log("Khoảng giá không hợp lệ.");
        return;
    }

    let filteredProducts = arr.filter(p => p.price >= minPrice && p.price <= maxPrice);
    
    if (filteredProducts.length > 0) {
        console.log("Sản phẩm lọc theo khoảng giá:");
        filteredProducts.forEach(p => {
            console.log(`ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, Số lượng: ${p.quantity}`);
        });
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    }
}
let choice;
do {
    choice = +prompt(`
        Mời bạn nhập lựa chọn:
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo ID.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo ID sản phẩm.
        5. Xóa sản phẩm theo ID.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
    `);

    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            show();
            break;
        case 3:
            showDetailById();
            break;
        case 4:
            update();
            break;
        case 5:
            remove();
            break;
        case 6:
            filterByPrice();
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }

} while (choice !== 7);
