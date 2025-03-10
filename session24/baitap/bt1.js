let arr = [];
let a;

do {
    // Hiển thị menu lựa chọn
    a = +prompt("Nhập lựa chọn:\n1. Nhập mảng\n2. Hiển thị mảng\n3. số lớn nhất nỏ nhất\n4. tính tổng\n5. Tìm số\n6. Sắp xếp mảng\n7. Thoát");

    switch (a) {
        case 1:
            // Nhập mảng
            let number = +prompt("Nhập số lượng phần tử của mảng: ");
            for (let i = 0; i < number; i++) {
                let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                arr.push(num);
            }
            break;

        case 2:
            // Hiển thị mảng
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let output = "Mảng hiện tại: \n";
                for (let i = 0; i < arr.length; i++) {
                    output += `arr[${i}] = ${arr[i]}\n`;
                }
                alert(output);
            }
            break;

        case 4:
            // Tính tổng các phần tử chẵn và sắp xếp mảng
            let sum =0;
            for( let i =0 ; i< arr.length;i++){
                sum += arr[i];
            }alert("Tổng các phần tử trong mảng là: "+sum);

                case 6:// Sắp xếp mảng tăng dần
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            // Hoán đổi
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    
                }
            }
                // Hiển thị mảng sau khi sắp xếp
                alert("Mảng sau khi sắp xếp:"+arr+"");
            
            break;

        case 3:
            let max=0;
            let min=0;
            for(i=0;i< arr.length;i++){
                if(arr[i]>max){
                    max=arr[i];
                }
                if(arr[i]<min){
                    min=arr[i];
                }   
            }
            alert("Số lớn nhất là:"+max+" ");
            alert("Số nhỏ nhất là: "+min+" ");
            break;
            case 5:
                let findNumber=+prompt("Nhập số cần tìm: ");
                let count =0;
                for(let i=0;i<arr.length;i++){
                    findNumber== arr[i]?count++:count;
                }
                alert("Số lần xuất hiện của số "+findNumber+" là: "+count);
                break;


        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 4.");
            break;
    }

} while (a !== 7);  // Lặp lại cho đến khi người dùng chọn thoát (chọn 4)
