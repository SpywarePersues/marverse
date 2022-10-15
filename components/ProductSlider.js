/* eslint-disable @next/next/no-img-element */
import {AiFillStar} from 'react-icons/ai'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'

export default function ProductsSlider(){

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 700;
    };
    
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 700;
    };
    
    const databaseRef = collection(database, 'Product')
    const [firedata, setFiredata] = UseState([])

    UseEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    return(
        <div>
            <div className="text-right pb-6">
                <button 
                    class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-blue-400"
                    onClick={slideLeft}
                >
                    <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <BsArrowLeft></BsArrowLeft>
                    </span> 
                </button>
                <button 
                    class="inline-flex mx-3 text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-blue-400"
                    onClick={slideRight}
                >
                    <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <BsArrowRight></BsArrowRight>
                    </span> 
                </button>
            </div>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide pb-5'>
                {
                    firedata.map((data) => {
                        return(
                            <div key={data.id} className="glassmorph inline-block p-2 cursor-pointer w-64 lg:w-96 mx-3">
                                <img src={data.Image} className="w-15 lg:w-screen lg:px-10 mx-auto h-40 my-4" alt=""/>
                                <div className="font-Koho px-5">
                                    <p className='py-5'>{data.Name}</p>
                                    <div className="flex justify-between">
                                    <p>₹{data.Price}</p>
                                    <button class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-300 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <a href={`/product/${data.id}`} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Discover
                                        </a> 
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}