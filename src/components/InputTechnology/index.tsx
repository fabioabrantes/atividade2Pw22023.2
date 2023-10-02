import { PlusCircle } from "phosphor-react";

interface InputTeachnologyProps {
  createTeach: (text: string) => void;
}

export function InputTechnology({createTeach}:InputTeachnologyProps){
/* cria estado que guarda a tecnonoly que é uma string */

  /* função que cria uma tecnologia no array  */
  function handleCreateTechnology() {
    
  }

  return (
    <div>
      <input type="text" onChange={()=>{}}/>
      
      <button onClick={handleCreateTechnology}>
        <span>Criar</span>
        <PlusCircle size={32} color="#923517" weight="duotone" />
      </button>
    </div>
  )
}