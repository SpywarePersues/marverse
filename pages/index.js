/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import ProductsSlider from '../components/ProductSlider'

export default function Home() {

  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {

    const timeout = setTimeout(() => {
      setTimeout(() => {
        setMounted(true)
      })
    }, 3700);

    return () => clearTimeout(timeout);
    
  }, [])


  return (
    <div>
      {
        mounted ? 
        <ContainerBlock>
          <div>
            <div className='flex justify-around lg:9/12 lg:pt-24 mx-auto bg-[url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80")] bg-cover '>
              <div className='lg:w-5/12 mx-auto font-bold lg:text-8xl font-koho flex flex-col justify-center bg-[url("https://i.pinimg.com/originals/1f/2d/90/1f2d9088ff0c68825dc00096820313ff.png")] py-24 bg-cover text-center text-gray-900'> 
                Are You The Worthy One?
                <p></p>
              </div>
            </div>
            <div className='text-center font-marvel lg:text-6xl pt-10'>
              A collection of <span className='text-red-500'>Premium Marvel products</span>
            </div>
            <div className='my-10'>
              <ProductsSlider></ProductsSlider>
            </div>
          </div>
        </ContainerBlock>
        :
        <video autoPlay className='w-screen h-screen mx-auto bg-black'>
          <source src="./intro.mp4" />
        </video>
      }
    </div>
  )
}
