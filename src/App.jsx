import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard.jsx";

//Todo Compnente do React é assim
//1) Função (codigo muito antigo, pode ser uma classe)
//2) Ele tem um return
// Fora do return / Codigo JavaScript
// Dentro do return / codigo "HTML"

//useState -> Gerenciar estado do componente
// Estado -> Super variavel que quando muda, o componente é atualizado
// Não fica carregando a tela o tempo todo, só quando o estado muda

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  //1) Variavel em si, que eu pego o valor dela
  //2) set uma função para atualizar o valor da variavel, e quando eu chamo essa função, o componente é atualizado

  function handleSubmit(event) {
    event.preventDefault(); // Evitar que a página seja recarregada

    const newUser = {
      id: Date.now(), // Gerar um ID único para o usuário
      name,
      email,
      age,
    };
    console.log(users);
    setUsers([...users, newUser]); // Atualizar o estado com o novo usuário
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          placeholder="Idade"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <div className="users-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
