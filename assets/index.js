let dress = document.getElementById('dress');
dress = dress.innerHTML;

let earrings = document.getElementById('earrings');
earrings = earrings.innerHTML;

let shoes = document.getElementById('shoes');
shoes = shoes.innerHTML;

let bag = document.getElementById('bag');
bag = bag.innerHTML;

let sum = +dress + +earrings + +shoes + +bag;

let result = document.getElementById('result');
result.innerHTML = sum;

let rate = 0.8;

function applyDiscount() {
    result.innerHTML = sum*rate;
    document.getElementById('dress').textContent = +dress*rate;
    document.getElementById('earrings').textContent = +earrings*rate;
    document.getElementById('shoes').textContent = +shoes*rate;
    document.getElementById('bag').textContent = +bag*rate;
}







