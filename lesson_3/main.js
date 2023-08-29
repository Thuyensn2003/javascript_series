// OBJECT ( Đối Tượng )

// let userName = "Thuyen";
// let userEmail = "@@@";
// let password = 1244;

// function post(){
//     alert("javascript");
// }
// mẫu của một object trong js , biến và dữ liệu phân cách bằng dấu : thay vì = như gán biến thông thường !

// các function nằm trong 1 object được gọi là 1 phương thức ( method )

//  let userOne = {
//      userName : " Hoag ",
//      email : " @234",
//      password : "11242424",
//      post(){
//          alert("jsss");
//      },
//  };

// console.log(userOne.userName);

// các bạn có thể tạo 1 object con nằm ngay trong object trước đó 

 let userTwo = {
     userName : '12',
     userS : '1242',
     food : {
         favFood: 'Pho',
         nonFav: 'muop dang'
     },

     post(){
        alert("JSSS");
     },


 }

// console.log(userTwo.food.favFood);
// console log ban se thay ket qua tra ve la pho ;

//Document chinh la 1 js object

// document = {
//     a: 'okem ',
//     addEventListener(){
//         ...
//     },
// }

// function myFunc(){
//     alert("Hello !");
// }

// document.addEventListener("click",myFunc);

document.addEventListener("click", userTwo.post);

