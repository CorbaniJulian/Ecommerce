function cargarNavegacion() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <div class="buscador">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Buscar Productos...">
    </div>

    <div class="carrito">
      <a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <input type="checkbox" id="toggle-menu" class="toggle-menu">
    <label for="toggle-menu" class="menu-label">
    <i class="fa-solid fa-bars"></i>
    </label>
      <ul class="submenu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="login.html">Sign in</a></li>
      </ul>
    </div>

    <ul class="nav-menu">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Ofertas</a></li>
      <li><a href="login.html">Iniciar Sesion</a></li>
    </ul>
`;
}

document.addEventListener("DOMContentLoaded", cargarNavegacion);
