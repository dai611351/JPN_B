let number = +prompt("nhấn 1 để đổi sang USD nhấn 2 để đổi sang VND");

switch (number) {
    case 1:
        let number1 = +prompt("nhập số tiền muốn chuyển");
        let leng = number1 / 23000
        document.write(leng, " USD ");
        break;
    case 2:
        let number2 = +prompt("nhập số tiền muốn chuyển");
        let leng2 = number2 * 23000
        document.write(leng2, " vnd ");
        break;
    default:
        document.write("không tồn tại mời nhập lại");

}
