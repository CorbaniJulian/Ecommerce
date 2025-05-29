function cargarPie() {
    const footer = document.querySelector("footer");
    footer.innerHTML=`<div class="footer-contenido">
            <h3>Tienda de zapatos</h3>
            <p>En nuestra tienda de zapatos encontrarás zapatos para todos, con variedad de zapatos que se adaptan a tus necesidades de zapatos. Porque si buscas zapatos, nuestros zapatos son lo que necesitas. Zapatos cómodos, bonitos, zapatos únicos, simplemente… zapatos.</p>
            <ul class="sociales">
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </div>
        <div class="footer-bajo">
            <p>copyright &copy; <a href="#">Tienda de zapatos</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Iniciar Sesion</a></li>
                      </ul>
                    </div>
        </div>
`;
}

document.addEventListener("DOMContentLoaded", cargarPie);
