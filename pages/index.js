/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import ContainerBlock from '../components/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='my-10'>
        <img src='https://cdn.discordapp.com/attachments/910730837996224584/1029971331627876423/unknown.png' alt='' className='opacity-70 rounded-lg w-11/12 mx-auto border-4 border-neutral-600 border-solid' />
        <div className='glassmorph mt-6 p-6 w-10/12 mx-auto rounded-lg'>
          <h1 className='text-5xl text-center mt-10'>Captain America&apos;s <span className='text-red-500'>Shield</span></h1>
          <p className='text-center mx-auto w-[55rem] pt-6 text-xl'>The shield...It&apos;s just love 💖, Well...did you know you can also buy it! It would be so cool to get a shield like captain america...just don&apos;t use it for bad things :D </p>
          <button className='button py-3 px-5 rounded-md mx-auto block mt-6'><Link href='/product/product2'>Discover</Link></button>
        </div>
      </div>
    </ContainerBlock>
  )
}
