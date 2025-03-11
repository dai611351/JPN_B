function isPanlindrome() {
    let text =prompt("Nhập số cần kiểm tra");
    let flag = 1;
    for ( let i=0; i<text.length/ 2; i++){
        if(text[i]!= text[text.length-1-i]){
            flag = 0;
            break;
        }
    }
    flag?console.log("Là số Palindrome"):console.log("Không phải số Palindrome");
    
}
isPanlindrome();
