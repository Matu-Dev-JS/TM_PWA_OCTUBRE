var nombres = ['pepe', 'juan', 'maria'];
var mesesQueGane = [true, false, true, true];
var pepe = ['pepe', 30];
var product = {
    precio: 100,
    id: 1,
    nombre: 'tv samsung'
};
var mostrarProducto = function (producto) {
    document.write("\n        <div>\n            <h1>".concat(producto.nombre, "</h1>\n        </div>\n        "));
};
var mostrarProductos = function (productos) {
    for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
        var producto = productos_1[_i];
        document.write("\n            <div>\n                <h1>".concat(producto.nombre, "</h1>\n            </div>\n            "));
    }
};
mostrarProductos([product, product, product]);
