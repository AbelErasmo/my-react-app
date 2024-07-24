import { useState } from 'react';
import "./css/login.css"; 

const Formulario = () => {
    const [inputs, setInputs] = useState("");

    const handlerEvent = (event) => {
        const name = event.input.name;
        const value = event.input.value;
        setInputs(values => ({...value, [name]: value}))
    }

    return (
        <main className="main">
            <form onSubmit={handlerEvent}>
                <h2 className="tituto">Login</h2>

                <label>Email ou Apelido:
                    <input type='text' name='username' value={inputs.username || ""}
                    onChange={handlerEvent} required/><br />
                </label><br />

                <label>Senha:
                    <input type='text' name='outrosNomes' value={inputs.outrosNomes || ""}
                    onChange={handlerEvent} required/><br />
                </label>

                <button className="butao">Entar</button>
            </form>
        </main>
    )
}

export default Formulario;