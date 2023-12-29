import React from 'react'
import { useEffect, useState } from 'react'
export default function Check() {
  const errorHandler = (error) => {
    console.log("Error", error)
  }
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch('/data/productData')
      .then((Response) => Response.json())
      .then((Data) => setMovies(Data.productData))
      .catch(errorHandler)
  }, [])
  // movies?.length > 0 ?console.log(movies):console.log('data not found');
  // console.log(movies)
  return (
    <>
      <div>
        {
          movies?.map(({id,name,rate}) => {
            return (
              <div key={Math.random()} > {id}: {name}:{rate} </div>
            )
          })
        }
      </div>
    </>
  )
}
