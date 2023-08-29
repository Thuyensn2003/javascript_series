/* FUNCTION ( HÀM ) */

// VD : function greet(){
//  alert("hello world !")

// }

// greet();

/* PARAMETER ; gíup function trở thành hàm động ( dynamic ) giúp người dùng tương tác với chức năng của hàm
*/

function trippleMe(data){
    return data * 3;

}

let myNumber = trippleMe(3);

console.log(myNumber);

function doublemMe (data){
    return data *  2 ;
    
}

let myNewNumber = doubleMe(2);
console.log(myNewNumber);
