// Tenemos un li de productos
/*Lo primero que hago es correr el código en el navegador, para observar si funcionan bien tanto el html, css y JS
Reviso la consola para verificar si hay algún problema y sí, en la lína 28 que es una función no declarada */

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos")//mofico por .getElementByID en tanto que se estaba usando id
const $i = document.querySelector('.input');
const btnFiltrar = document.getElementById("btnFiltro");

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") //modifico a "let" para no tener posibles problemas de hosting
  d.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

botonDeFiltro.addEventListener("click", () => {
  const texto = $input.value.trim();
  
  displayProductos(productos); {
  const botonDeFiltro = document.querySelector("button");

}

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  if (texto === null) {
    console.log("Texto vacío");
    
  }//agrego if para tener en cuenta errores de código en caso de que texto esté vacío
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  const textoLower = texto.toLowerCase();//agrego esta variable para que la búsqueda del filtro no sea tan escricta con el usuario
  return productos.filter(item => item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto));
}