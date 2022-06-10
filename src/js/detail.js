import {productList} from './data.js'

import { render } from './common.js'
//Lấy được id trên URL
const id = new URLSearchParams(window.location.search).get("id");
//Tìm trong mảng, nếu có id nào trùng id trong mảng thì trả về kết quả
console.log("id", id);
const product = productList.find((item) => item.id == id);
console.log("product", product);
const result = `
    <div>
        <h2>${product.name}</h2>
        <p>Mo ta san pham</p>
        <form action=""></form>
        </div>
        <div>img</div>
`;
render("product-detail", result);