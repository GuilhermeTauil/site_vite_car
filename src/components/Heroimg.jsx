import "bootstrap/dist/css/bootstrap.min.css";
import "../Heroimg.css"; // Estilo adicional

const Heroimg = () => {
  return (
    <div class="hero-container d-flex align-items-center justify-content-center">
      <div class="text-center">
        <h1 class="display-3 fw-bold text-light mb-3 animate-fade-in">
          Sua Marca
        </h1>
        <p class="lead text-light animate-slide-in">
          Onde a inovação encontra a paixão
        </p>
      </div>
    </div>
  );
};

export default Heroimg;
