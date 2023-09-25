'use client'
import { FC, useEffect } from 'react'
import { useState } from 'react'
import { IPrice } from './type'

const Price: FC<IPrice> = ({ id, price, options }) => {
    const [total, setTotal] = useState(price)
    const [quantit, setQuantit] = useState(1)
    const [selected, setSelect] = useState(0)

    useEffect(() => {
        setTotal(quantit * (options ? price + options[selected].additionalPrice : price));
    }, [quantit, selected, options, price])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>${price.toFixed(2)} - Total: ${total} </h2>
            <div className='flex gap-4'>{options?.map((option, index) => (
                <button key={option.title} className={`min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md bg-${selected === index ? 'red-500' : 'white'} text-${selected === index ? 'white' : 'red-500'}`} onClick={() => setSelect(index)}>{option.title}</button>
            ))}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-4 items-center'>
                        <button onClick={() => setQuantit(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                        <span>{quantit}</span>
                        <button onClick={() => setQuantit(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                    </div>
                </div>
                <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Card</button>
            </div>
        </div>
    )
}

export default Price