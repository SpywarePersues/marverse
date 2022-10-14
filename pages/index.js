/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import ProductsSlider from '../components/ProductSlider'
import LoadScreenContainerBlock from '../components/LoadScreenContainerBlock'

export default function Home() {

  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {

    const timeout = setTimeout(() => {
      setTimeout(() => {
        setMounted(true)
      })
    }, 3500);

    return () => clearTimeout(timeout);
    
  }, [])


  return (
    <div>
      {
        mounted ? 
        <ContainerBlock>
          <div>
            <div className='flex justify-around lg:9/12 lg:pt-24 mx-auto bg-[url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80")] bg-cover '>
              <div className='bg-[url("https://i.pinimg.com/originals/1f/2d/90/1f2d9088ff0c68825dc00096820313ff.png")] bg-contain bg-no-repeat text-center py-24 '>
                <div className='font-bold lg:text-8xl font-koho flex flex-col justify-center text-center text-gray-900'> 
                  <p className='text-gray-200 bg-gray-900 md:w-[98vw] w-screen py-2'>ARE YOU THE WORTHY ONE?</p>
                </div>
              </div>
            </div>
            <div className='text-center font-marvel lg:text-6xl pt-10'>
              A collection of <span className='text-red-500'>Premium Marvel Products</span>
            </div>
            <div className='my-10'>
              <ProductsSlider></ProductsSlider>
            </div>
          </div>
        </ContainerBlock>
        :
        <LoadScreenContainerBlock>
        <video autoPlay muted className='w-screen h-screen mx-auto'>
          <source src="./intro.mp4" />
        </video>
        </LoadScreenContainerBlock>
      }
    </div>
  )
}
