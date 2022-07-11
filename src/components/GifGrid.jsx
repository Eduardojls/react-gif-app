import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import '../styles.css';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
   
      {
        isLoading 
        ? ( <h1>Loading...</h1> )
        : ( <h1>{ category }</h1> )
      }
       
       <div className='card-grid'>
       {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
       </div>
    </>
  )
}
