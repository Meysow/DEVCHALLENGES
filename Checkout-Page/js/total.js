function CalculateItemsValue() {
    let total = 0;
    let total_items = 2;
    let shippingCost = parseInt(document.getElementById("shipping_cost").getAttribute("data-price"));

    for (i=1; i<=total_items; i++) {
        itemID = document.getElementById("qnt_"+i);
        nbID = document.getElementById("myNumber"+i);

        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "qnt_"+i);
        } else {
            total = total + parseInt(nbID.value) * parseFloat(itemID.getAttribute("data-price"));
        }
    }

    if (total == 0) {
        document.getElementById("ItemsTotal").innerHTML = "$0";
    } else {
        document.getElementById("ItemsTotal").innerHTML = "$" + Math.round((total + shippingCost + Number.EPSILON) * 100) / 100;
    }
    document.getElementById('shipping_cost').innerHTML = "$" + shippingPrice();
}

function shippingPrice() {
    let myNumber1 = document.getElementById('myNumber1');
    let myNumber2 = document.getElementById('myNumber2');

    if (parseInt(myNumber1.value) > 0 || parseInt(myNumber2.value) > 0) {
        return 19;
    } else {
        return 0;
    }
}
