//Viết một hàm nhận vào một mảng chuỗi và trả về một mảng chứa các chuỗi ngày được định dạng là DD/MM/YYYY


function filterDate(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    let kq = arr.filter(function (item) {
        let date = new Date(item);
        return date instanceof Date && !isNaN(date);
    });

    console.log(kq);
}
filterDate(["10/10/2020", "abc", "20/10/2020", "30/10/2020", "40/10/2020"]);