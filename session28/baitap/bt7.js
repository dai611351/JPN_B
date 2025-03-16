let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
function filter(students) {
    if (Array.isArray(students)) {
        if (students.length == 0) {
            console.log("mảng không chứa phán tử");
            return;
        }
        let sum = students.filter(function (a) {
            let tb = (a.scores.math + a.scores.english + a.scores.literature) / 3;
            return tb >= 8;
        })
        console.log("kết quả là", sum);
    } else {
        console.log("giá trị không hợp lệ");

    }

}
filter(students);