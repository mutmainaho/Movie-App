import React ,{useEffect,useState} from 'react'


function Header({handleSearch=()=>{

}}) {
   const[search,setSearch]= useState("all");
   

   



   const handleOnSubmit=(e)=>{
     e.preventDefault();


    handleSearch(search);


   }
  



   useEffect(()=>{
    handleSearch(search);

  }, [])


    return (
        <div>
          <header >
              <form onSubmit= {handleOnSubmit}> 
              <input className="search" type="text"
               placeholder="search..."
               value= {search}
               onChange= {(e)=>
              setSearch(e.target.value)}
               />
                 <button type='submit'>submit</button>
              </form>
            
             
              </header> 
        </div>
    )
}

export default Header
