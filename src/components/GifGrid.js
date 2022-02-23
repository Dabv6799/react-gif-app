import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

   const {data:images, loading} = useFetchGifs(category)
   console.log('loading', loading)
   
  return (
    <>
        {loading && <p>Cargando...</p> }
        <div className='card-grid'>
        {
                images.map((img)=>{
                    // return <li key={img.id}>{img.title}</li>
                    return <GifGridItem  
                    key = {img.id}
                    {...img}
                    />
                })

            }

            
        </div>
    </>
  )
}
