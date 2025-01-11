"use client"
import React from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={Date.now() + 100000000} />
  )
}

export default CountDown