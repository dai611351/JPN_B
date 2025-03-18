
let storePhones = [
    {
        id: 1,
        model: "Redmi Note 7",
        cost: 3000000,
        stock: 30,
        brand: "Xiaomi",
    },
];

let shoppingCart = [];
let option;
let menuOptions = `
  1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
  2. Thêm điện thoại mới vào cửa hàng
  3. Tìm kiếm điện thoại theo tên hoặc ID
  4. Mua điện thoại (Nhập ID điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
  5. Thanh toán giỏ hàng (Thông báo thanh toán thành công và xóa giỏ hàng)
  6. Sắp xếp điện thoại theo giá
  7. Hiển thị tổng số tiền của các điện thoại trong kho
  8. Hiển thị tổng số lượng điện thoại theo từng hãng
  9. Thoát chương trình
  Nhập lựa chọn của bạn: 
`;

while (option !== 9) {
    option = +prompt(menuOptions);
    switch (option) {
        case 1:
            let selectedBrand = prompt("Nhập hãng điện thoại bạn muốn xem: ");
            let filteredPhones = storePhones.filter(
                (item) =>
                    item.brand.toLowerCase() === selectedBrand.toLowerCase()
            );
            if (filteredPhones.length !== 0) {
                console.table(filteredPhones);
            } else {
                console.log("Không tìm thấy hãng điện thoại này.");
            }
            break;
        case 2:
            let newModel = prompt("Nhập tên điện thoại muốn thêm: ");
            let newCost = +prompt("Nhập giá của điện thoại: ");
            let newStock = +prompt("Nhập số lượng điện thoại muốn thêm: ");
            let newBrand = prompt("Nhập hãng điện thoại: ");
            let newPhone = {
                id: Math.random(),
                model: newModel,
                cost: newCost,
                stock: newStock,
                brand: newBrand,
            };
            storePhones.push(newPhone);
            console.log("Thêm điện thoại thành công!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}
