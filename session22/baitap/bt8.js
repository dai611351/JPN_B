let arr = [3, 1, 2, 2, 3, 4, 4, 4, 2, 3];
let freqMap;
let maxCount = 0;
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < 10; j++) {

        if (arr[i] == arr[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;

        freqMap = maxCount

    } else if (count == maxCount && arr[i] < freqMap) {
        freqMap = arr[i];

    }

}
document.write("Số xuất hiện nhiều nhất là:"+freqMap+" " );
