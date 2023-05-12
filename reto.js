// descuento parece ser un porcentaje
function calcularPrecio(precioBase, descuento){
    if(precioBase <= 0 || (descuento < 0 || descuento > 100)){
        return "Los valores ingresados son invalidos"
    }
    if(descuento == 0){
        return precioBase
    }
    if(descuento > 0 && descuento <= 100){
        return "El precio final con descuento es de $"+(precioBase-((descuento*precioBase)/100))
    }
}


// Los valores ingresados son invalidos
console.log("base 0, descuento 80: "+calcularPrecio(0, 80))
console.log("base -5, descuento 80: "+calcularPrecio(-5, 80))
console.log("base 100, descuento -5: "+calcularPrecio(100, -5))
console.log("base 100, descuento 120: "+calcularPrecio(100, 120))

// Retornar el precio base sin descuento
console.log("base 30, descuento 0: "+calcularPrecio(30, 0))

//El precio final con descuento es de $X
console.log("base 285, descuento 30: "+calcularPrecio(285, 30))