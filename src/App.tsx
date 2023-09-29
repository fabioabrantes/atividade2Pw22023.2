
import { Header } from './components/Header';
import { InputTechnology } from './components/InputTechnology';
import { Technologies } from './components/Technologies';

import './global.css';

import styles from './App.module.css';
import { useState } from 'react';

type Technology = {
  id:string;
  studied:boolean;
  text:string;
}
function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  return (
    <div className={styles.container}>
      <Header title="Minha lista de Tecnologias"/>

      <main>
          <InputTechnology/>
          <Technologies  />
      </main>
    </div>
  )
}

export default App
