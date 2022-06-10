//hiển thị ra ngoài màn hình
export function render(element, content){
    //Nếu tìm được id là element thì thay element thành content
    if(element){
        document.getElementById(element).innerHTML = content;
    }
}