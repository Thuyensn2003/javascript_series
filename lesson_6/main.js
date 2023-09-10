// tìm hiểu thêm về high-ordered function
// ví dụ về function AddEventListener ... : chấp nhận 2 tham số Parameter 
// => trong JS , một function hoàn toàn có thể chấp nhận 1 function khác được truyền vào coi tham số thể thực hiện chức năng của hàm đó
// một function có thể trả về một function khác 
// nhắc lại : function nằm bên trong 1 OB được gọi là method ( phương thức )
// Only for WEB BROWSER @
let Num = 66;
function myNum (Num){
    alert("Hello")
}
document.addEventListener("click", myNum);

// function doubleMe(x){
//     return 2 * x ;
// }
// function trippleMe(x){
//     return 3 * x ;
// }

function calNum(num1){
    return function (num2){
        return num1 * num2 ;
    };

}

let doubleMe = calNum(2);
let trippleMe = calNum(3);

console.log(doubleMe(6));
console.log(trippleMe(6));



let myColor = [ "blue" , "gray" , "red" ];

myColor.forEach(myFunc);

function myFunc (item){
    console.log(item);
}