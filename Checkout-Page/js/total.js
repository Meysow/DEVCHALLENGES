function CalculateItemsValue() {
    var total = 0;
    var total_items = 2;
    var ship = parseInt(document.getElementById("shipping_cost").getAttribute("data-price"));
    for (i=1; i<=total_items; i++) {
        
        itemID = document.getElementById("qnt_"+i);
        nbID = document.getElementById("myNumber"+i)
        if (typeof itemID === 'undefined' || itemID === null) {
            alert("No such item - " + "qnt_"+i);
        } else {
            total = total + parseInt(nbID.value) * parseFloat(itemID.getAttribute("data-price"));
        }
         
    }
    document.getElementById("ItemsTotal").innerHTML = "$" + Math.round((total + ship + Number.EPSILON) * 100) / 100;
}