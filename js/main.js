//倒计时
function setCountdown(){
    const target = new Date("2026-11-11 00:00:00").getTime();
    const now = Date.now();
    const diff = target - now;
    if(diff <=0){
        document.getElementById("time").innerText="活动已开启";
        return;
    }
    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);
    document.getElementById("time").innerText=`${d}天 ${h}时 ${m}分 ${s}秒`;
}
setInterval(setCountdown,1000);
setCountdown();

//商品
const goods = [
    {id:1,name:"无线蓝牙耳机",price:129},
    {id:2,name:"机械键盘",price:199},
    {id:3,name:"快充充电宝",price:89},
    {id:4,name:"电竞鼠标",price:79}
];
const goodsDom = document.getElementById("goodsList");
goods.forEach(g=>{
    goodsDom.innerHTML += `
    <div class="goods-item">
        <div>${g.name}</div>
        <div>￥${g.price}</div>
        <button onclick="addCart(${g.id})">加入购物车</button>
    </div>`
})

let cart = [];
function addCart(id){
    const g = goods.find(x=>x.id===id);
    cart.push(g);
    renderCart();
}
function renderCart(){
    const cartDom = document.getElementById("cartList");
    let total = 0;
    cartDom.innerHTML = "";
    cart.forEach(item=>{
        cartDom.innerHTML += `<div>${item.name} ￥${item.price}</div>`;
        total += item.price;
    })
    let after = total >=200 ? total -30 : total;
    document.getElementById("total").innerText = total;
    document.getElementById("afterDiscount").innerText = after;
}
function clearCart(){
    cart = [];
    renderCart();
}
