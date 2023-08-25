
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarProductosEnCarrito() {
        return this.productos.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');
    }
}

const productos = [
    new Producto("Paleta Cocida Cagnoli", 1840),
    new Producto("Jamon Cocido Cagnoli", 3400),
    new Producto("Jamon Natural Cagnoli", 4900),
    new Producto("Lomo Ahumado Lario", 3810),
    new Producto("Mortadela Bocha Calchaqui", 2110),
    new Producto("Panceta Ahumada Bierzo", 4500),
    new Producto("Salamines Cagnoli", 5380),
    new Producto("Salame Cagnoli", 4060),
    new Producto("Jamon Crudo Weber", 3500),
    new Producto("Cantimpalo Lario", 3630),
    new Producto("Holanda Varense", 2900),
    new Producto("Reggiano Silvia", 3230),
];

const carrito = new Carrito();

function mostrarProductos() {
    let mensaje = "Seleccione un producto ingresando su código numérico:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    return parseInt(prompt(mensaje));
}

while (true) {
    const opcion = mostrarProductos();
    if (opcion < 1 || opcion > productos.length) {
        alert("Opción inválida. Intente de nuevo.");
        continue;
    }

    const productoElegido = productos[opcion - 1];
    carrito.agregarProducto(productoElegido);

    const continuar = prompt("¿Desea agregar otro producto al carrito? (Sí/No)").toLowerCase();
    if (continuar !== "si") {
        break;
    }
}

const carritoInfo = carrito.mostrarProductosEnCarrito();
alert("Productos en el carrito:\n" + carritoInfo);

const totalCarrito = carrito.calcularTotal();
alert(`Total del carrito: $${totalCarrito}` +" "+ " Gracias  por su compra ");



