
type Technology = {
  id:string;
  studied:boolean;
  text:string;
}
type TechnologyProps = {
  tech: Technology,
  checkedTech: (id: string) => void;
  deleteTech: (id: string) => void;
}
export function Technology({tech, checkedTech,deleteTech}:TechnologyProps){
  function handleChecktechnology() {
    
  }

  function handleDeleteTechnology() {
    
  }

  return (
    <div>
      <button 
       
        onClick={handleChecktechnology}
      >
          
      </button>

      <p>
        {"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."}
      </p>

      <button 
        onClick={handleDeleteTechnology}
      >
       
      </button> 
    </div>
  )
}