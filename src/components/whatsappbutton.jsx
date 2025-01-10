import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import { FaWhatsapp } from "react-icons/fa"; // Importa o ícone do WhatsApp de react-icons
import { createSignal } from "solid-js"; // Usando createSignal para controlar os dados do formulário

const WhatsAppButton = () => {
  // Estado para os campos do formulário
  const [name, setName] = createSignal("");
  const [car, setcar] = createSignal("");
  const [income, setIncome] = createSignal("");
  const [carValue, setCarValue] = createSignal("");
  const [installments, setInstallments] = createSignal("");

  // Função para criar a mensagem do WhatsApp com os dados preenchidos
  const createMessage = () => {
    return `Olá, estou interessado no ${car()}! Meu nome é ${name()}, minha renda mensal é R$ ${income()}, o valor do carro é R$ ${carValue()} e gostaria de saber sobre o financiamento em ${installments()} parcelas.`;
  };

  const phoneNumber = "+5521999999999"; // Substitua pelo número do WhatsApp desejado

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const message = createMessage();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Abre o WhatsApp com a mensagem
  };

  return (
    <>
      {/* Botão que abre o modal */}
      <a
        href="#"
        class="btn btn-success d-flex align-items-center my-3 d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#modalForm"
        role="button"
      >
        <FaWhatsapp class="me-2" style={{ fontSize: "1.5rem" }} />
        <span>Solicitar simulação no WhatsApp</span>
      </a>

      {/* Modal */}
      <div
        class="modal fade"
        id="modalForm"
        tabindex="-1"
        aria-labelledby="modalFormLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalFormLabel">
                Simulação de Financiamento
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label htmlFor="name" class="form-label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={name()}
                    onInput={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="name" class="form-label">
                    Modelo do veiculo
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="car"
                    value={car()}
                    onInput={(e) => setcar(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="income" class="form-label">
                    Renda Mensal
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="income"
                    value={income()}
                    onInput={(e) => setIncome(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="carValue" class="form-label">
                    Valor do Carro
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="carValue"
                    value={carValue()}
                    onInput={(e) => setCarValue(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="installments" class="form-label">
                    Número de Parcelas
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="installments"
                    value={installments()}
                    onInput={(e) => setInstallments(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Enviar Simulação
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
