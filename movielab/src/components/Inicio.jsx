import React from 'react'

const inicio = () => {
    return (
     <>
       <main>
        <label className='movie-filter'> Filtrar por: </label>
          <select id="filter" data-testid="select-filter" name="conservation-status">      
            <option value="">---</option>
            <option value="preocupacion-menor">Preocupación menor</option>
            <option value="vulnerable">Vulnerable</option>
            <option value="casi-amenazado">Casi amenazado</option>
          </select>
        <label className='movie-order'> Ordenar por: </label>
          <select id="order" data-testid="select-sort" name="alphabetic">
            <option value="">---</option>      
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
      </main>
   </>
  )
}

export default inicio