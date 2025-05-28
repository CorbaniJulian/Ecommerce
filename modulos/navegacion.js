function cargarNavegacion() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <div class="buscador">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Buscar Productos...">
    </div>

    <div class="carrito">
      <i class="fa-solid fa-cart-shopping"></i>
    </div>

    <div class="menu-hamburguesa">
      <i class="fa-solid fa-bars"></i>
      <ul class="submenu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>

    <ul class="nav-menu">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Ofertas</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    `;
}

document.addEventListener("DOMContentLoaded", cargarNavegacion);
