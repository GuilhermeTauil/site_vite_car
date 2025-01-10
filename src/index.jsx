import { render } from "solid-js/web";
import Navbar from "./components/Navbar";
import Galeria from "./components/Galeria";
import Heroimg from "./components/Heroimg";
import AnimatedBackground from "./components/AnimatedBackground";
import "animate.css"; // Importando Animate.css no seu componente

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <Heroimg />
      <h2
        class="text-center text-light mt-5 display-4 fw-bold text-shadow animate__animated animate__fadeIn animate__delay-1s"
        style={{
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        Veículos Disponíveis
      </h2>
      <h3 class="text-center text-light mt-5 animated-piscando">
        Realize já seu sonho
      </h3>

      <Galeria />
      {/* Estrelas*/}
      <div class="container text-center mt-5">
        <div class="stars">
          <div class="stars">
            <div class="star" style="animation-delay: 0s;"></div>
            <div class="star" style="animation-delay: 0.3s;"></div>
            <div class="star" style="animation-delay: 0.7s;"></div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center vh-50 p-5">
        <div class="text-center text-light  ">
          <h1 class="my-1">Sobre a empresa</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <footer class="bg-dark text-white py-4">
        <div class="container text-center">
          <p class="mb-2">
            &copy; 2025 Sua Empresa. Todos os direitos reservados.
          </p>
          <p class="mb-0">Financiamento de carros fácil e rápido.</p>
          <div class="social-icons mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="text-white mx-2"
            >
              <i class="bi bi-facebook"></i> {/* Ícone do Facebook */}
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="text-white mx-2"
            >
              <i class="bi bi-instagram"></i> {/* Ícone do Instagram */}
            </a>
            <a
              href="https://wa.me/1234567890" // Substitua pelo número de telefone real do WhatsApp
              target="_blank"
              class="text-white mx-2"
            >
              <i class="bi bi-whatsapp"></i> {/* Ícone do WhatsApp */}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

render(() => <App />, document.getElementById("root"));
