import React from 'react'

//const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false'


function Header() {
    //const[Search,setSearch]= useState("");



    return (
        <div>
          <header >
              <form  > 
              <input className="search" type="text"
               placeholder="search..."
               
               />
              </form>
             
              </header> 
        </div>
    )
}

export default Header
