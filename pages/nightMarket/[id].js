/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useEffect as UseEffect, useState, useState as UseState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { useRouter as UseRouter } from 'next/router'
import { database } from '../../firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'

function nightMarketScreen() {
    const router = UseRouter()
    const { id } = router.query;

    const databaseRef = collection(database, 'Night Market')
    const [firedata, setFiredata] = UseState([])
    const [currentData, setCurrentData] = useState({})

    UseEffect(() => {
        getData()
    }, [])

    const htmlJSX = (
        <div>{currentData.Name}</div>
    )

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    useEffect(() =>{
        firedata.map((data) => {
            if(data.id == id){
                setCurrentData(data)
            }
        })


    
    }, [firedata])

    console.log(currentData)

    return (
        <ContainerBlock>
            {htmlJSX}
        </ContainerBlock>
    )
}

export default nightMarketScreen