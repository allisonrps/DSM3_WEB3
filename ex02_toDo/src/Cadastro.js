import React, { useState, useEffect } from 'react';
import './Cadastro.css';

function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Entregar Tarefa",
        "Estudar Programação"
    ]);

    // USEEFFECT DAS TAREFAS:
    const tarefasStorage = localStorage.getItem('@tarefa');

    useEffect ( () =>{
        if(tarefasStorage){
           setTarefas(JSON.parse(tarefasStorage));
        }     
    }, []);

    useEffect ( () =>{
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);


    // CRIANDO ALERTA COM O FORMULÁRIO DO NOME:

    // VARIAVEL
    const [nome, setNome] = useState('');

    useEffect(() => {
      const armazenadoNome = localStorage.getItem('nome');
    // VERIFICANDO SE JÁ TEM NOME SALVO
      if (armazenadoNome) {
        setNome(armazenadoNome);
    // SENÃO COLETE O NOME NO POP UP
      } else {
    // VARIÁVEL DO NOME COLETADO
        const entradaNome = prompt('Qual é o seu nome?');
        if (entradaNome) {
          setNome(entradaNome);
          localStorage.setItem('nome', entradaNome);
        }
      }
    }, []);

    //MANIPULAR REGISTRO DE TAREFA
    const handleRegistro = (e) => {
        e.preventDefault();

        setTarefas([...tarefas, input])
        setInput('');
    };

    //MUDANÇA DE CORES
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (event) => {
      setBackgroundColor(event.target.value);
    };

    // FRONT:
    return (
        <div style={{ backgroundColor: backgroundColor }} className="container">
            <h1>Olá {nome}!</h1>
            <form onSubmit={handleRegistro}>
                <label>
                    <input type="text" className="center-placeholder" 
                    placeholder="ADICIONAR TAREFA" value={input}
                    onChange={(e) => setInput(e.target.value)} />
                </label>
                <button type="submit"> ADICIONAR </button>
            </form>

            <h2>LISTA DE TAREFAS:</h2>
            <ul>
            {tarefas.map( tarefa =>(
                <li key = {tarefa}>{tarefa}</li>
            ))}
            </ul>

           <h2>COR DE FUNDO:</h2>
          <label>
            <input type="radio" value="honeydew"checked={backgroundColor === 'honeydew'}
            onChange={handleColorChange}/> HONEYDEW </label>
          <label>
            <input type="radio" value="cornsilk"checked={backgroundColor === 'cornsilk'}
            onChange={handleColorChange}/> CORNSILK </label>
          <label>
            <input type="radio" value="azure"checked={backgroundColor === 'azure'}
            onChange={handleColorChange}/> AZURE </label>
          <label>
            <input type="radio" value="paleturquoise "checked={backgroundColor === 'paleturquoise '}
            onChange={handleColorChange}/> PALETURQUOISE </label>
          <label>
            <input type="radio" value="ghostwhite"checked={backgroundColor === 'ghostwhite'}
            onChange={handleColorChange}/> GHOSTWHITE </label>
                      <label>
            <input type="radio" value="pink"checked={backgroundColor === 'pink'}
            onChange={handleColorChange}/> PINK </label>
        </div>
    );
}

export default Cadastro;
