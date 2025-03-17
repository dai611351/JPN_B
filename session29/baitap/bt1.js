let contacts = []; // Array to store contacts
function add() {
    let name = prompt("nhập tên");
    let email = prompt(" nhập emali");
    let phone = prompt("nhập số điện thoại");
    if (!phone || isNaN(phone) || phone.length > 10) {
        console.log("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
        return;
    }
    let id = contacts.length + 1;
    contacts.push({name, email,phone, id});
    console.log(contacts);
    
    console.log("đã thêm phần tử");
}

function show() {
   
        if(contacts.length==0){
            console.log("danh sách liên hệ trống");

        }else{
        console.log("phần tử vừa thêm")
        contacts.forEach(contacts=>{ 
            console.log(`ID: ${contacts.id}, Tên: ${contacts.name}, Email: ${contacts.email}, Số điện thoại: ${contacts.phone}`);
            
        });

        }
    
    
}
function search() {
    let searchPhone=prompt("nhập số đt muốn tìm")
    let foundContact= contacts.find(console => console.phone===search)
    if(foundContact){
        console.log(`thông tin liên hệ là: 
            id:${foundContact.id}
            tên: ${foundContact.name}
            email: ${foundContact.email}
            `);
        

        
    }else{
        console.log("không tìm thấy liên hệ");

    }
}
function update() {
    let updateId=+prompt("nhập id muốn tìm kiếm");
    let contactToUpdate= contacts.find(idd=>idd.id===updateId);
    if(contactToUpdate){
        if (contactToUpdate) {
            // Cập nhật thông tin của liên hệ
            contactToUpdate.name = prompt("Nhập tên mới:", contactToUpdate.name);
            contactToUpdate.email = prompt("Nhập email mới:", contactToUpdate.email);
            let newPhone = prompt("Nhập số điện thoại mới:", contactToUpdate.phone);
    
            // Kiểm tra số điện thoại mới hợp lệ
            if (!newPhone || isNaN(newPhone) || newPhone.length < 10) {
                console.log("Số điện thoại không hợp lệ.");
                return;
            }
            contactToUpdate.phone = newPhone;
            console.log("Thông tin liên hệ đã được cập nhật.");
        } else {
            console.log("Không tìm thấy liên hệ với ID này.");
        }
    }

    
    
}
function remove() {
    let deleteId=+prompt("nhập id của liên hệ caafn xáo");
    let indexToDelete= contacts.findIndex(detid=> detid.id===deleteId);

        if (indexToDelete !== -1) {
        contacts.splice(indexToDelete, 1); // Xóa liên hệ khỏi mảng
        console.log("Đã xóa liên hệ.");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}


let choice;
do{
    choice =+prompt(`
           Moi ban nhap lua chon:
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6. Thoát.

`)
switch (choice) {
    case 1:
        add();
        break;
    case 2:
        show()
        break;
    case 3:
        search()
        break;
    case 4:
        update()
        break;
    case 5:
        remove()
        break;
    case 6:
        console.log("Thoát khỏi chương trình.");
        
        break;
    default:
        console.log("lua chon khong hop le, vui long nhap lai!")
        break;
}

}while(choice!==6)