import React, { useRef as UseRef, useState as UseState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { useRouter as UseRouter } from 'next/router'
import { database } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

function nightMarket() {
    const databaseRef = collection(database, "Orders")
    const [name, setName] = UseState('')
    const [email, setEmail] = UseState('')
    const [card, setCard] = UseState('')
    const [expiry, setExpiry] = UseState('')
    const [cvv, setCvv] = UseState('')
    const [address, setAddress] = UseState('')
    const amount = 999999;
    const router = UseRouter()

    const sendData = (e) => {
    e.preventDefault();

    addDoc(databaseRef, {
        name: name,
        email: email,
        card: card,
        expiry: expiry,
        cvv: cvv,
        address: address
    })
    .then(() => {
        alert('Your Order Has Been Placed.')
        router.push('/nightMarket')
    })
    }


    return (
        <ContainerBlock title="Checkout">
            <h1 className='pt-[2rem] text-5xl text-center'>Checkout</h1>
            <h1 className='pb-[2rem] pt-[1rem] text-3xl text-center'>Total amount : <strong>${amount}</strong></h1>
            <form onSubmit={sendData} className="glassmorph shadow-xl mx-auto py-4 px-8 shadow-gray-300 w-6/12 rounded-lg mb-[8.35rem]">
                <label className='block text-gray-300 text-sm font-bold mb-2'>Name</label>
                <input value={name} onChange={event => setName(event.target.value)}  type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Email</label>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Debit Card/Credit Card</label>
                <input value={card} onChange={event => setCard(event.target.value)} type="text" name="card" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Expiry Date</label>
                <input value={expiry} onChange={event => setExpiry(event.target.value)} type="text" name="expiry" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>CVV</label>
                <input value={cvv} onChange={event => setCvv(event.target.value)} type="text" name="cvv" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Full Address</label>
                <textarea value={address} onChange={event => setAddress(event.target.value)} type="text" name="address" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <h1 className='pb-[0.5rem] text-xl text-center text-yellow-600'>Note : <strong>Cash On Delivery is not possible due to high payment.</strong></h1>
            <h1 className='pb-[2rem] text-xl text-center text-red-600'>Warning : <strong>Adding products to cart is not possible due to security reasons.</strong></h1>
                <button type="submit" className='text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 px-6 py-4 mx-auto block my-auto'>Checkout</button>
            </form>
        </ContainerBlock>
    )
}

export default nightMarket