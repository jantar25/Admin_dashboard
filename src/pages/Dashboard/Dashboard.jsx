import React from 'react'

import cardItems from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Chart from '../../components/Chart/Chart'

const Dashboard = () => {
  return (
    <div>
      <Cards cardItems={cardItems} />
      <Chart />
    </div>
  )
}

export default Dashboard