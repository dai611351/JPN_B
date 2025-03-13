
      function isArithmeticProgression() {
    let arr = [];
    let number = true;

    let n = parseInt(prompt("Mời bạn nhập tổng số phần tử muốn thêm: "));
    if (isNaN(n) || n < 2) {
        alert("Số lượng phần tử phải là số nguyên lớn hơn hoặc bằng 2!");
        return;
    }

    for (let i = 0; i < 2; i++) {
        let input = parseInt(prompt(`Mời bạn nhập phần tử thứ ${i + 1}:`));
        if (isNaN(input)) {
            alert("Vui lòng nhập số hợp lệ!");
            return;
        }
        arr.push(input);
    }

   
    let d = arr[1] - arr[0];

    
    for (let i = 2; i < n; i++) {
        let input = parseInt(prompt(`Mời bạn nhập phần tử thứ ${i + 1}:`));
        if (isNaN(input)) {
            number = false;
            break;
        }
        arr.push(input);
        if (arr[i] - arr[i-1] !== d) {
            number = false;
            break;
        }
    }

    alert(number);
}


isArithmeticProgression();

