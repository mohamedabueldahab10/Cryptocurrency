import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const Cryptocurrencies = () => {
  
  const {data:cryptoList,isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  console.log(cryptos);

  if(isFetching) return "Loading ..."
  return (
    <div>
      Cryptocurrencies
    </div>
  )
}

export default Cryptocurrencies
