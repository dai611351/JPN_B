function capitalizeFirstLetter(str) {
    // Tách chuỗi thành các từ, biến ký tự đầu tiên của mỗi từ thành chữ in hoa
    let result = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    return result;
}

console.log(capitalizeFirstLetter("hello world")); // "Hello World"
console.log(capitalizeFirstLetter("javaScript is amazing")); // "Javascript Is Amazing"
