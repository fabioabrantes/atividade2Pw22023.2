import { PlusCircle } from "phosphor-react";

export function InputTechnology(){
  return (
    <div>
      <input type="text" onChange={()=>{}}/>
      
      <button>
        <span>Criar</span>
        <PlusCircle size={32} color="#923517" weight="duotone" />
      </button>
    </div>
  )
}