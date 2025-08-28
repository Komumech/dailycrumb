let price = 0;
let order = [];

function addToOrder(item, itemPrice) {
    price += itemPrice;
    order.push(item);
    // Count items
    const counts = {};
    order.forEach(i => {
        counts[i] = (counts[i] || 0) + 1;
    });
    // Format order summary
    const displayOrder = Object.entries(counts)
        .map(([item, count]) => count > 1 ? `${item} (${count})` : item)
        .join(", ");
    document.querySelector(".order").innerHTML = displayOrder || "Your order will appear here.";
    document.querySelector(".price").innerHTML = "N " + price;
}
