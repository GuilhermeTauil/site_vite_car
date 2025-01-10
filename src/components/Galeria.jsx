import { createSignal, onMount } from "solid-js";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import WhatsAppButton from "./whatsappbutton";

const ImageCanvas = (props) => {
  const [currentImage, setCurrentImage] = createSignal(props.images[0].src);
  let canvas;

  // Renderiza a imagem no canvas sempre que a imagem atual muda
  const renderImage = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const context = canvas.getContext("2d");
      const scaleFactor = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scaleFactor) / 2;
      const y = (canvas.height - img.height * scaleFactor) / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * scaleFactor,
        img.height * scaleFactor
      );
    };
  };

  // Atualiza o canvas quando a imagem atual muda
  onMount(() => {
    renderImage(currentImage());
  });

  return (
    <div class="container my-3">
      <div class="row">
        <div class="col-12 col-md-8 d-flex justify-content-center">
          <canvas
            ref={canvas}
            width="800"
            height="600"
            class="w-100"
            style={{ border: "none" }} // Remove a borda
          ></canvas>
        </div>
        <div class="col-12 col-md-4 mt-md-5">
          {/* Informações ao lado no desktop e abaixo no celular */}
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Detalhe</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modelo</td>
                <td>{props.produto.modelo}</td>
              </tr>
              <tr>
                <td>Ano</td>
                <td>{props.produto.ano}</td>
              </tr>
              <tr>
                <td>Cor</td>
                <td>{props.produto.cor}</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>R$ {props.produto.preco}</td>
              </tr>
            </tbody>
          </table>
          <WhatsAppButton />
          {/* Dropdown com as opções de imagens */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Fotos
            </button>
            <ul
              class="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton"
            >
              {props.images.map((image) => (
                <li>
                  <button
                    class="dropdown-item d-flex align-items-center"
                    onClick={() => renderImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.label}
                      class="img-thumbnail me-2"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    {image.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Galeria() {
  const produtos = [
    {
      modelo: "Carro X",
      ano: 2025,
      cor: "Preto",
      preco: 75000,
      imagens: [
        { label: "Exterior", src: "/1.jpg" },
        { label: "Rodas", src: "/2.jpg" },
        { label: "Interior", src: "/3.jpg" },
      ],
    },
    {
      modelo: "Carro Y",
      ano: 2026,
      cor: "Branco",
      preco: 80000,
      imagens: [
        { label: "Exterior", src: "/4.jpg" },
        { label: "Rodas", src: "/5.jpg" },
        { label: "Interior", src: "/6.jpg" },
      ],
    },
    {
      modelo: "Carro Z",
      ano: 2024,
      cor: "Vermelho",
      preco: 65000,
      imagens: [
        { label: "Exterior", src: "/7.jpg" },
        { label: "Rodas", src: "/8.jpg" },
        { label: "Interior", src: "/9.jpg" },
      ],
    },
  ];

  return (
    <div>
      {produtos.map((produto, index) => (
        <ImageCanvas key={index} produto={produto} images={produto.imagens} />
      ))}
    </div>
  );
}
