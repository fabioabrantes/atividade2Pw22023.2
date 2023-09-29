import { useState } from "react"
import { Task } from "../Task";

export function Tasks(){
  const [showTaks, setShowTasks] = useState(false);
  return (
    <div>
      {
        showTaks ? 
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