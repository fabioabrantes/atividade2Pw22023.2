
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
        <div>
          {
            task.checked &&
            <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.43107 0.342093L4.09914 4.67403L1.61667 2.19156L0.780762 3.02747L4.09914 6.34584L9.26698 1.178L8.43107 0.342093Z" fill="#F2F2F2"/>
            </svg>  
          }
        </div>  
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