import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'boa hancock' ]);

    const onAddCategory = (newCategory) => { 
        
        // categories.push('Valorant'); No hacer esto en lo pasible

        if ( categories.includes( newCategory )) return;
        // setCategories( cat => [ ...cat, 'Valorant' ] );
        // setCategories([ ...categories, 'Valorant' ]); // Se añade al final
        setCategories([ newCategory, ...categories ]); // Se añade al inicio

    };

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ onAddCategory } />

        { categories.map( category => (
            <GifGrid key={ category } category={ category }  />
        ))}

    </>
  )
}
