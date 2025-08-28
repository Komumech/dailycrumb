var price = 0;
var order= [];
function clickCinnamon(){
    price += 700;
    order.push("Cinnamon Roll");
    document.querySelector(".order").innerHTML = order.join(", ");
    console.log(price);
    const counts = {};
    order.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });
    const displayOrder = Object.entries(counts)
        .map(([item, count]) => count > 1 ? `${item} (${count})` : item)
        .join(", ");
    document.querySelector(".order").innerHTML = displayOrder;
    document.querySelector(".price").innerHTML = "N "+ price;
}
