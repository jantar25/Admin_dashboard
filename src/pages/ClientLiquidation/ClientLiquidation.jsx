import React from 'react'
import liquidations from '../../constants/liquidation';
import Table from '../../components/Table/Table';

const ClientLiquidation = () => {
  return (
    <div className='users-container'>
    <div className="users-table-container">
      <Table 
        head={['No','DATE','No LIQUIDATION','MARCHAND','MOYEN DE LIQUIDATION','No DE COMPTE','No REFERENCE']}
        body={liquidations.map((liquidation,index)=>([
          index+1,
          liquidation.date,
          liquidation.liquidationUid,
          liquidation.marchant,
          liquidation.paymentModality,
          liquidation.accountNumber,
          liquidation.refNumber,
          ]))}
        />  
    </div>
  </div>
  )
}

export default ClientLiquidation