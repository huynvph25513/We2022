// let a = 10;
// a = 20;

// var b = 20;
// b = 30;

// const c = 10;
// // c = 20;

// console.log("a", a);
// console.log("b", b);
// // console.log("c", c);

// khi nào sử dụng const hay let

const children = ["Kien", "Tung", "Lam"];
// 0       1       2
for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

const myName = "Lê Trọng Đạt";
const myAge = 30;
const myStatus = true;

const myChildren = ["Kien", "Tung", "Lam"]; // myChildren[2] ~ Lam

const myInfo = {
  name: "Dat",
  age: 30,
  status: true,
  fullName: "Le Trong Dat",
  "Ho va Ten": "Le Trong Dat"
}; // myInfo.age | myInfo['age']
   
/*
    selector: 
        - Sử dụng querySelector(css selector) hoặc getElementById('id element');
    template string: 
        - sử dụng backstick ~ dấu huyền để bao chuỗi
*/

// document.querySelector("#app").innerHTML = `
// <h1>Xin chao toi ten la ${myInfo.name}, nam nay toi ${myInfo.age} tuoi.
//     Tinh trang: ${myInfo.status ? "Da ket hon" : "Chua ket hon"}
// </h1>`;

// ví dụ 2
const productList = [
    {id: 1, name: "Product A", price: 200},
    {id: 2, name: "Product B", price: 300},
    {id: 3, name: "Product C", price: 400},
    {id: 4, name: "Product D", price: 500}
];

let result = "";

for (let i = 0; i< productList.length; i++){
    const item = productList[i];
    result += `<div>
                <h2>${item.name}</h2>
                <span>${item.price}</span>
                </div>`;
}

document.querySelector("#products").innerHTML = sesult;