
import { useState } from 'react';
import "./css/cadastrar.css"; 

const Formulario = () => {
	const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
  
    return (
        <main id="main">
            <form onSubmit={handleChange}>
                <h1 className="tituto">Cadastar Novo Usuário</h1>

                <label>Apelido:
                    <input type='text' name='username' value={inputs.username || ""}
                    onChange={handleChange} required/><br />
                </label>

                <label>Outros nomes:
                    <input type='text' name='outrosNomes' value={inputs.outrosNomes || ""}
                    onChange={handleChange} required/><br />
                </label>

                <label>Email:
                    <input type="email" name='email' value={inputs.email || ""} 
                    onChange={handleChange} required /><br />
                </label>

                <label>Profissão:
                    <input type='text' name='profissao' value={inputs.profissao || ""}
                    onChange={handleChange} required/><br />
                </label>

                <label>Senha:
                    <input type='password' name='senha' value={inputs.senha || ""}
                    onChange={handleChange} required/><br />
                </label>

                <label>Confirmar senha:
                    <input type='password' name='confirmar' value={inputs.confirmar || ""}
                    onChange={handleChange} required/><br />
                </label>
                <button className="butao">Cadastar</button>
            </form>
        </main>
    )
}

export default Formulario;