import { PlusCircle } from "phosphor-react";

import styles from './InputTask.module.css';

interface InputTechnologyProps {
  createTech: (text: string) => void;
}

export function InputTechnology({createTech}:InputTechnologyProps){
/* cria estado que guarda a tecnonoly que é uma string */

  /* função que cria uma tecnologia no array  */
  function handleCreateTechnology() {
    
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" onChange={()=>{}}/>
      
      <button className={styles.button} onClick={handleCreateTechnology}>
        <span>Criar</span>
        <PlusCircle size={16} weight="bold" />
      </button>
    </div>
  )
}