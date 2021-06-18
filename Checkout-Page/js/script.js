function up(max, myId) {
    document.getElementById(myId).value = parseInt(document.getElementById(myId).value) + 1;
    if (document.getElementById(myId).value >= parseInt(max)) {
        document.getElementById(myId).value = max;
    }
}
function down(min, myId) {
    document.getElementById(myId).value = parseInt(document.getElementById(myId).value) - 1;
    if (document.getElementById(myId).value <= parseInt(min)) {
        document.getElementById(myId).value = min;
    }
}


function validation() {
    let email = document.getElementById("email").value,
        phone = document.getElementById("phone").value,
        name = document.getElementById("name").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value,
        postalCode = document.getElementById("postal-code").value;

    alert("Form Successfully Submitted !")

    if(email.indexOf("@") == -1 || email === "" || email == null){
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        return false;
    }

    if(name === "" || name == null){
        return false;
    }

    if(address === "" || address == null){
        return false;
    }

    if(city === "" || city == null){
        return false;
    }

    if(postalCode === "" || postalCode == null){
        return false;
    }
    return false;
}