
const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://ngocnguyen.vn/cdn/images/202308/goods_img/dell-xps-15-9510-core-i7-11800h-rtx-3050ti-156-inch-fhd-G15129-1691456870705.png',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-5g-600x600.jpg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe199lQMx5DN4buZHFrKX1f4Bea5g4ObvUew&s',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 12990000,
        image: 'https://cdn.tgdd.vn/Products/Images/54/313692/tai-nghe-bluetooth-chup-tai-sony-wh1000xm5-trang-1-750x500.jpg',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 7999000,
        image: 'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
function renderProducts(productList) {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';

    productList.forEach((product) => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price.toLocaleString()} VND</strong></p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        `;
        productListContainer.innerHTML += productHTML;
    });
}
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    renderProducts(filteredProducts);
}
renderProducts(products);
