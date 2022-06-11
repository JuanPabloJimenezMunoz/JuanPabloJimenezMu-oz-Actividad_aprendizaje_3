const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var names = document.contactForm.names.value;
    var price = document.contactForm.price.value;
    var inventory = document.contactForm.inventory.value;

    var namesError = priceError = inventoryError = true;

    if (names == "") {
        printError("namesError", "* El campo es requerido *");
    } else {
        printError("namesError", "");
        namesError = false;
    }

    if (price == "") {
        printError("priceError", "* El campo es requerido *");
    } else if (price <= 0){  
        printError("priceError","* Ingresa valores mayores a 0 *");
    } else {
        printError("priceError","");
        priceError = false;
    }

    if (inventory == ""){
        printError("inventoryError","* El campo es requerido *");
    }else if (inventory < 0) {
        printError("inventoryError","Ingresa valores positivos");
    } else {
        printError("inventoryError","");
        inventoryError = false;
    }

    if ((namesError || priceError || inventoryError) == true){
        return false;
    } else {
        var dataPreview = "El producto con los siguientes datos: \n" +
                          "Nombre: " + names +"\n" +
                          "Precio: "+ price + "\n" +
                          "Inventario: "+ inventory + "\n" +
                          "! Ha sido creado !";

        alert(dataPreview);
    }
}
