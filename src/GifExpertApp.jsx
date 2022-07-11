import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Shingeki' ]);

  const onAddCategory = (newCategories) => { 

    if ( categories.includes(newCategories) ) return;

      setCategories([
        newCategories,
        ...categories,
      ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ (event) => onAddCategory(event) }/>

      { 
        categories.map( (category) => (
            <GifGrid 
                key={ category }
                category={ category }
            />
        ))
      }
    </>
  )
}
