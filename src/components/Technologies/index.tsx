import { Technology } from "../Technology";

type Technology = {
  id:string;
  studied:boolean;
  text:string;
}
type TechnologiesProps = {
  techs: Technology[],
  checkedTech: (id: string) => void;
  deleteTech: (id: string) => void;
}
export function Technologies({techs,checkedTech,deleteTech}:TechnologiesProps){

  const createdTechnologies = techs.length;

  /* fazer essa função que calcula a quantidade de tecnologias estudadas usando o reduce*/
  const technologiesCompleted = techs.reduce(() => {return 0}, 0);

  return (
    <div>
      <div>
        <div>
          <strong>Tecnologias criadas</strong>
          <span>{createdTechnologies}</span>
        </div>

        <div>
          <strong>Concluídas</strong>
          <span>{technologiesCompleted} de {createdTechnologies}</span>
        </div>
      </div>

      { 
      createdTechnologies ? 
          /* cria os componentes tecnologia passando os métodos checkedTech e deleteTech e a technology como propriedades*/
          <></>
        :
          <div>
            <strong>Você ainda não tem tecnologias cadastradas</strong>
            <p>Crie tecnologias e organize seus itens a fazer</p>
          </div>
      }
    </div>
  );
}