function cargarNavegacion() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <div class="buscador">
            <i class="fa-solid fa-glass"></i>
            <input>
        </div>
        <menu class="menu">
            <li>
                <a href="#">
                    <i class="fa-solid"></i>
                </a>    
            </li>
            <li>
                <i class="fa-solid fa-bars"></i>
                <menu class="menu-desplegable">
                    <li>
                        <a href="#">

                        </a>
                    </li>
                    <li>
                        <a href="#">

                        </a>    
                    </li>
                </menu>
            </li>
        </menu>
    `;
}

document.addEventListener("DOMContentLoaded", cargarNavegacion);
