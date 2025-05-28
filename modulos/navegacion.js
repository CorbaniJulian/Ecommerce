function cargarNavegacion() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
  <div class="buscador">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Buscar Productos...">
  </div>
  <ul class="nav-menu">
    <li>
      <a href="#">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    </li>
    <li class="menu-hamburguesa">
    <i class="fa-solid fa-bars"></i>
      <ul class="submenu">
        <li><a href="#">Opción 1</a></li>
        <li><a href="#">Opción 2</a></li>
      </ul>
    </li>
  </ul>
`;

}

document.addEventListener("DOMContentLoaded", cargarNavegacion);
