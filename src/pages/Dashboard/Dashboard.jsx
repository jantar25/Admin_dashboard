import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

import { getMarchants } from '../../Redux/apiCalls';
import {cardItems} from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Chart from '../../components/Chart/Chart'

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getMarchants(dispatch)
  }, [dispatch])
  
  return (
    <div>
      <Cards cardItems={cardItems} />
      <Chart />
    </div>
  )
}

export default Dashboard