// Arrays ( Mảng )

// let myNumber = [
//     1 ,2, 3,4 ,5
// ];

// let myAnimal = [
//     "dog" , "cat" , "monkey"
// ];

// Một mảng cũng có thể chứa nhiều object

// let myId = [
//     { name: "thuyen" , email: "aaa" , phoneNum : "0120231"},
//     { name: "Hoag" , email: " aaaaaa" , phoneNum : "14231313"},

// ];

//hoàn toàn có thể chứa nhiều kiểu dữ liệu trong 1 mảng

 let myInf = [
     1,
     { name: 'Thuyen' , age: '12'},
     "Dog"
 ];
// console.log(myInf);

// Gọi phần tử trong 1 mảng cần biết vị trí của phẩn tử đó trong mảng , bắt đầu từ 0 ..

console.log(myInf)

// * method array_name.push cho phép đẩy 1 phần tử mới vào vị trí sau cùng của mảng


// myInf.push("hehe");

// * method splice(a,b) giúp lấy ra các phần tử ở vị trí được chỉ định từ mảng ban đầu

myInf.splice(0,1);
console.log(myInf);