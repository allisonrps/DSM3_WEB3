import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [dadosRegistrados, setRegistro] = useState(null);

    const handleRegistro = (e) => {
        e.preventDefault();

        // Armazena
        const dados = {
        nome: nome,
        email: email,
        idade: idade
        };

        setRegistro(dados);
        // Limpar
        setNome('');
        setEmail('');
        setIdade('');
    };

    return (
        <div className="container">
            <h2>REACT - SISTEMA DE CADASTRO</h2>
            <form onSubmit={handleRegistro}>
                <label>
                    NOME: 
                    <input type="text" value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                </label><p></p>
                <label>
                    E-MAIL: 
                    <input type="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </label><p></p>
                <label>
                    IDADE: <input type="number" value={idade}
                    onChange={(e) => setIdade(e.target.value)} />
                </label><p></p>
                <button type="submit"> REGISTRAR </button>
            </form>
            {dadosRegistrados && (
                <div className="result">
                    <h2> REGISTRO CONCLUÍDO: </h2>
                    <p>NOME: {dadosRegistrados.nome}</p>
                    <p>E-MAIL: {dadosRegistrados.email}</p>
                    <p>IDADE: {dadosRegistrados.idade}</p>
                </div>
            )}
        </div>
    );
}

export default Cadastro;
