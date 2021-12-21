import logo from './assets/biscoito.png';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Quote from './components/Quote';

const App = () => {

  const [ fraseEscolhida, setFraseEscolhida ] = useState('');
  const [ frase ] = useState([
  'Siga os bons e aprenda com eles.', 
  'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'
]);

const handleGenerateNewQuote = () => {
  const numeroAleatorio = Math.floor(Math.random() * frase.length);
  setFraseEscolhida('"' + frase[numeroAleatorio] + '"')
}

  return (
    <>
    
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    <Button onClick={handleGenerateNewQuote} >New Quote</Button>
    <Quote>{fraseEscolhida}</Quote>
    </>
  );
}

export default App;
