let number = +prompt("mời bạn nhập tháng: ");
switch (number) {
    case 1:
    case 2:
    case 3:


        document.write("tháng " + number + ": Đang là mùa xuân nhaa ");
        break;
    case 4:
    case 5:
    case 6:


        document.write("tháng " + number + ": Đang là mùa hè nhaa ");
        break;
    case 7:
    case 8:
    case 9:


        document.write("tháng " + number + ": Đang là mùa thu nhaa ");
        break;
    case 10:
    case 11:
    case 12:


        document.write("tháng " + number + ": Đang là mùa đông nhaa ");
        break;

    default:
        document.write("không tháng hợp lệ");
}