var price = 0;
var order= [];
function CountrySourdough(){
    price += 4500;
    order.push("Country Sourdough");
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
function WheatSourdough(){
    price += 5000;
    order.push("Whole Wheat Sourdough");
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
function RosemarySourdough(){
    price += 5500;
    order.push("Olive & Rosemary Sourdough");
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
function MultigrainSourdough(){
    price += 5200;
    order.push("Multigrain Sourdough");
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
function Baguettes(){
    price += 2000;
    order.push("Baguettes");
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
function ButterCroissant(){
    price += 2200;
    order.push("Butter Croissant");
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
function PainAuChocolat(){
    price += 2500;
    order.push("Pain au Chocolat");
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
function CinnamonRolls(){
    price += 2000;
    order.push("Cinnamon Rolls");
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
function AlmondCroissant(){
    price += 2800;
    order.push("Almond Croissant");
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
function Blueberry Muffins(){
    price += 2800;
    order.push("Almond Croissant");
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
function AlmondCroissant(){
    price += 2800;
    order.push("Almond Croissant");
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
