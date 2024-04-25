import React,{useEffect} from 'react'
import { allMovies } from '../funciones/ejeaxios'

const Inicio = () => {
  useEffect(()=>{
    allMovies()
  },[])  

  return (
     <>
     <div>Home</div>
       
       <main>
         
          <select className= 'movie-filter'id="filter" data-testid="select-filter" name="conservation-status">      
            <option value="">Filtrar por:</option>
            <option value="preocupacion-menor">Preocupación menor</option>
            <option value="vulnerable">Vulnerable</option>
            <option value="casi-amenazado">Casi amenazado</option>
          </select>
        
          <select className="movie-order" id="order" data-testid="select-sort" name="alphabetic">
            <option value="">Ordenar por:</option>      
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
      </main>
   </>
  )
}

export default Inicio