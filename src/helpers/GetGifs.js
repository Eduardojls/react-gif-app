export const getGifs = async( category ) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Af90QrP9tMFJJDy0cXdweqpMinRsgChG&q=${ category }&limit=10`;
    
    const result = await fetch(url);
    const { data } = await result.json();
  
    const gifsData = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    return gifsData;
  };