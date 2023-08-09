
// memo. función para calcular el precio total por producto y cantidad
function calcularPrecio(cantidad, precioUnitario) {
    return cantidad * precioUnitario;
}

// Use una función para mostrar la lista de productos
function mostrarProductos() {
    let mensaje = "Seleccione un producto ingresando su código numérico:\n";
    mensaje += "1. Paleta Cocida\n";
    mensaje += "2. Jamon Cocido\n";
    mensaje += "3. Jamon Natural\n";
    mensaje += "4. Lomo Ahumado\n";
    mensaje += "5. Mortadela Bocha\n";
    mensaje += "6. Panceta Ahumada\n";
    mensaje += "7. Salaminces Cagnoli\n";
    mensaje += "8. Salame Cagnoli\n";
    mensaje += "9. Jamon Crudo\n";
    mensaje += "10. Cantimpalo Lario\n";
    mensaje += "11. Holanda Varense\n";
    mensaje += "12. Reggiano Silvia\n";
    mensaje += "0.  Cancelar compra y salir";
    return parseInt(prompt(mensaje));
}

// Esta es la función primordial
function comprarProductos() {
    let continuar = true;
    let totalGastado = 0;
    let productosSeleccionados = {};

    while (continuar) {
        let codigoProducto = mostrarProductos();

        if (codigoProducto === 0) {
            continuar = false;
            alert("Gracias por visitar nuestra tienda esperamos vuelva pronto");
            break;
        } else if (codigoProducto < 1 || codigoProducto > 12) {
            alert("Código inválido. Por favor, seleccione un código numerico de los que figura en la lista.");
            continue;
        }

        let cantidad = parseInt(prompt("Ingrese la cantidad que desea llevar:"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida. Por favor, ingrese nuevamente una cantidad válida.");
            continue;
        }

        let precioUnitario;
        switch (codigoProducto) {
            case 1:
                precioUnitario = 1370;
                break;
            case 2:
                precioUnitario = 1650;
                break;
            case 3:
                precioUnitario = 2750;
                break;
            case 4:
                precioUnitario = 3030;
                break
            case 5:
                precioUnitario = 1790;
                break;
            case 6:
                precioUnitario = 3300;
                break;
            case 7:
                precioUnitario = 4300;
                break;
            case 8:
                precioUnitario = 3900;
                break;
            case 9:
                precioUnitario = 3590;
                break;
            case 10:
                precioUnitario = 3380;
                break;
            case 11:
                precioUnitario = 2520;
                break;
            case 12:
                precioUnitario = 2900;
                break;
        }

        totalGastado += calcularPrecio(cantidad, precioUnitario);
        productosSeleccionados[codigoProducto] = (productosSeleccionados[codigoProducto] || 0) + cantidad;


        /*Encontre en ejemplos la variable tolower case para pasar a minuscula cualquier texto ingresado 
         por que aqui probandolo me jodia el algoritmo*/
        let respuesta = prompt("¿Desea comprar otro producto? (Sí/No)").toLowerCase();
        continuar = respuesta === "si";
    }

    if (totalGastado !== 0) {
        let listaProductos = "";
        for (let codigo in productosSeleccionados) {
            listaProductos += `${productosSeleccionados[codigo]} x Producto ${codigo}\n`;
        }
		alert(`Productos seleccionados:\n${listaProductos}\nTotal gastado: $${totalGastado}`);
	}
}

comprarProductos();



