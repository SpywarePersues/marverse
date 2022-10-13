/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { useRouter as UseRouter } from 'next/router'
import { database } from '../../firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'

function nightMarketScreen() {
    const router = UseRouter()
    const { id } = router.query;

    return (
        <ContainerBlock>
            <h1>Page no: {id}</h1>
        </ContainerBlock>
    )
}

export default nightMarketScreen