import { useState } from "react"
import { Task } from "../Technology";

export function Technologies(){
  const [showTechs, setShowTechs] = useState(false);
  return (
    <div>
      {
        showTechs ? 
          (<Task/>)
        : 
         (
          <div>
            <p>Você ainda não tem tecnologias cadastradas</p>
            <p>Crie tecnologia e organize seus itens a fazer</p>
          </div>
          )
      }
      
    </div>
  )
}