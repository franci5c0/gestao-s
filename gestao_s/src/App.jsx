import { useState } from "react";

function app() {
  const [message, setMessage] = useState("Olá, mundo") //escreve a mensagem na tela

  // let message = "olá mundo!";
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("olá, fui clicado"); //mensagem que aparece ao clicar no botão
        }}
      >
        mudar mensagem
      </button>
    </div>
  );
}

export default app;
