// câu điều kiện if-else ( IF-ELSE STATEMENT)

// vd : trong 1 cửa hàng có 20 cái quạt , nếu bán hết 20 cái quạt cần đóng của hàng
// vì vậy chúng ta có thể dùng if-else để viết hàm logic này


let myStore = 11;

if (myStore != 20){
    console.log(" myStore open with ", myStore);
}
else if ( myStore <=20){
    console.log(" closed");
}
else{
    console.log("co cai cl");
}


// kiểu dữ liệu boolean có thể được sử dụng trong câu lệnh điều kiện 
// typeof la js method giup console log ra kieu du lieu cua bien duoc truyen vao trong cu phap vi du : 

let myNum = 33;
if (myNum !== 22){
    console.log(typeof myNum);

}
else {
    console.log("ok em nhe !!")
}