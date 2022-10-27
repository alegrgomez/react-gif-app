import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading}  = useFetchGifts(category);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)

    // }, [category]);    
  

  return (
        <>
            <h3> { category } </h3>
            
            {loading && <p>Loading...</p>}

            <div className='car-grid'>
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            
        </>
  )

}
