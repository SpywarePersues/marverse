/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { useRouter as UseRouter } from 'next/router'
import { database } from '../../firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'

function saleScreen() {
    const router = UseRouter()
    const { id } = router.query;

    const databaseRef = collection(database, 'sale')
    const [firedata, setFiredata] = UseState([])
    const [currentData, setCurrentData] = UseState({})

    UseEffect(() => {
        getData()
    }, [])

    const htmlJSX = (
        <div>
            <img src={currentData.Image} className="rounded-lg border-gray-700 border-4 lg:w-11/12 md:w-10/12 w-9/12 lg:mx-16 mx-12 md:mx-20 p-4 my-6 glassmorph" alt='' />
            <h1 className='text-center mb-6 text-3xl md:text-5xl'>{currentData.Name}</h1>
            <h1 className='text-center mb-2 text-2xl'><strong>$</strong>{currentData.Price}</h1>
            <h1 className='text-center mb-2 text-2xl text-green-600'><strong>-</strong>{currentData.Discount}%</h1>
            <h1 className='text-center mb-4 text-xl w-10/12 mx-auto'>{currentData.desc}</h1>
            <Link href={`/checkout/shop`}><button className='my-6 button px-4 py-3 rounded-md block mx-auto'>Buy Now</button></Link>
        </div>
    )

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    UseEffect(() =>{
        firedata.map((data) => {
            if(data.id == id){
                setCurrentData(data)
            }
        })


    
    }, [firedata])

    console.log(currentData)

    return (
        <ContainerBlock title={currentData.Name}>
            {htmlJSX}
        </ContainerBlock>
    )
}

export default saleScreen