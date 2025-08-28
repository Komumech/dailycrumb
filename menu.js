var price = 0;
var order= [];
function clickCinnamon(){
    price += 700;
    order.push("Cinnamon Roll");
    document.querySelector(".order").innerHTML = order.join(", ");
    console.log(price);
    document.querySelector(".price").innerHTML = "N "+ price;
}
