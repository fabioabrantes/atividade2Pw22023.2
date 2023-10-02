
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

  function createTechnology(text: string) {
    const newTechnology = {
      /* criar */
    }
  
    /* salvar no estado  technologies*/
  }

  function checkedTechnology(id: string) {
    /* 
      uma solução seria usar o map para atualizar a technology como estudado (studied)
      retornando o array com todos as technology e com uma estudada de verificando o id 
      passado como parâmetro
     */

    //salva o array no estado
  }

  function deleteTechnology(id: string) {
     /* 
      uma solução seria usar o filter para deletar a technology 
      retornando o array com todas as technology menos a technology do id 
      passado como parâmetro
     */

    //salva o array no estado
  }
  return (
    <div className={styles.container}>
      <Header title="Minha lista de Tecnologias"/>

      <main>
          <InputTechnology createTech={createTechnology}/>
          
          <Technologies  
            techs={technologies} 
            checkedTech={checkedTechnology} 
            deleteTech={deleteTechnology}
          />
      </main>
    </div>
  )
}

export default App
