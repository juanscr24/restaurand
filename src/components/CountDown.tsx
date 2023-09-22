'use client'
import Countdown from 'react-countdown'

const CountDown = () => {
    return (
        <Countdown className='text-yellow-300 font-bold text-5xl' date={Date.now() + 100000000} />
    )
}

export default CountDown