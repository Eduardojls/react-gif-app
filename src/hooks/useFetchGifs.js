import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState([]);
    const [ isLoding, setIsLoding ] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoding(false)
    };
  
    useEffect( () => {
      getImages();
    }, [])

    return {
        images,
        isLoading: isLoding
    }
}
