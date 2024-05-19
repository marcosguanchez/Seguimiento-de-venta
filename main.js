let ventas = []; // Arreglo para almacenar las ventas
let categorias = ["Alimentos", "Ropa", "Electrónica"]; // Arreglo de categorías
let totalVentas = 0; // Variable para almacenar el total de ventas

// Función para agregar una venta
function agregarVenta() {
  // Solicitar el monto de la venta al usuario
  const montoVenta = parseFloat(prompt("Ingrese el monto de la venta:"));

  // Solicitar la categoría de la venta al usuario
  const indiceCategoria = parseInt(prompt(`Ingrese la categoría (0: ${categorias[0]}, 1: ${categorias[1]}, 2: ${categorias[2]}): `));

  // Validar la entrada de la categoría
  if (isNaN(indiceCategoria) || indiceCategoria < 0 || indiceCategoria >= categorias.length) {
    alert("Categoría inválida. Intente nuevamente.");
    return;
  }

  // Registrar la venta
  ventas.push({ monto: montoVenta, categoria: categorias[indiceCategoria] });
  totalVentas += montoVenta;

  // Mostrar mensaje de éxito
  alert(`Venta registrada con éxito en la categoría ${categorias[indiceCategoria]}`);
}

// Función para mostrar el total de ventas por categoría
function mostrarTotalesPorCategoria() {
  // Inicializar un objeto para almacenar el total de ventas por categoría
  const totalesPorCategoria = {};

  // Recorrer las ventas
  for (const venta of ventas) {
    // Obtener la categoría de la venta actual
    const categoria = venta.categoria;

    // Si la categoría ya existe en el objeto, incrementar su total
    if (totalesPorCategoria[categoria]) {
      totalesPorCategoria[categoria] += venta.monto;
    } else {
      // Si la categoría no existe, agregarla al objeto con su total inicial
      totalesPorCategoria[categoria] = venta.monto;
    }
  }

  // Mostrar el total de ventas por categoría
  console.log("Totales por categoría:");
  for (const [categoria, total] of Object.entries(totalesPorCategoria)) {
    console.log(`${categoria}: ${total}`);
  }
}

// Función para mostrar la categoría con las ventas más altas
function mostrarCategoriaMasAlta() {
  // Si no hay ventas registradas, mostrar mensaje
  if (ventas.length === 0) {
    alert("No hay ventas registradas para analizar.");
    return;
  }

  // Inicializar variables para almacenar la categoría y el total más altos
  let categoriaMasAlta = "";
  let totalMasAlto = 0;

  // Recorrer las ventas y actualizar las variables si se encuentra una venta mayor
  for (const venta of ventas) {
    if (venta.monto > totalMasAlto) {
      categoriaMasAlta = venta.categoria;
      totalMasAlto = venta.monto;
    }
  }

  // Mostrar la categoría con las ventas más altas
  console.log(`La categoría con las ventas más altas es: ${categoriaMasAlta} con un total de ${totalMasAlto}`);
}

// Menú principal
while (true) {
  const opcion = parseInt(prompt(`Menú principal: \n1. Agregar venta\n2. Ver totales por categoría\n3. Mostrar categoría con ventas más altas\n4. Salir`));

  switch (opcion) {
    case 1:
      agregarVenta();
      break;
    case 2:
      mostrarTotalesPorCategoria();
      break;
    case 3:
      mostrarCategoriaMasAlta();
      break;
    case 4:
      console.log("Saliendo del programa...");
      break;
    default:
      alert("Opción inválida. Intente nuevamente.");
  }

  if (opcion === 4) {
    break;
  }
}
