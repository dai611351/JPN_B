
let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];
function filterProducts() {
    const category = document.getElementById('categorySelect').value;
    const result = document.getElementById('result');
    result.innerHTML = ''; 
    const filteredProducts = dish.filter(item => item.category === category);
    filteredProducts.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
        result.appendChild(li);
    });
}
