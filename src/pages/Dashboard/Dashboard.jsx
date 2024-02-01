import React from 'react';
import {useSelector} from 'react-redux';

import {cardItems, paymentDashboardCardItems, liquidationDashboardCardItems, operateurDashboardCardItems} from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Table from '../../components/Table/Table';

const Dashboard = () => {
  const {transactions} = useSelector(state => state.transactions)
  const {marchants} = useSelector(state => state.marchants)
  
  return (
    <div>
      <div>
        <Cards cardItems={cardItems} />
        <Cards cardItems={paymentDashboardCardItems} />
        <Cards cardItems={liquidationDashboardCardItems} />
        <Cards cardItems={operateurDashboardCardItems} />
      </div>
      <div>
        <h2>Les transactions recentes</h2>
        <div className='dashboard-content-container'>
              {transactions.length > 0? 
                  <Table 
                      head={['No','DATE','No TRANSACTION','CLIENT','PHONE','MARCHANT','CODE','MONTANT','FRAIS','ID','No REF','STATUT','TYPE','No LIQIDATION']}
                      body={transactions.slice(0,10).map((transaction,index)=>([
                          index+1,
                          new Date(transaction.transactionDate).toJSON().slice(0, 10),
                          transaction.transactionUid,
                          transaction.customerNames,
                          transaction.customerMsisdn,
                          transaction.merchantNames,
                          transaction.merchantCode,
                          transaction.paidAmount,
                          transaction.serviceCharge,
                          transaction.paymentId,
                          transaction.referenceNumber,
                          transaction.transactionStatus,
                          transaction.serviceChargePaidBy,
                          transaction.mno,
                      ]))}
                      />
                      : <div className='not-found'>Pas de transaction</div>
                  }
          </div>
        </div>
        <div>
          <h2>Le top 10 des marchands</h2>
          <div className='dashboard-content-container'>
              {marchants.length > 0 ? 
                    <Table 
                        head={['ID','No','CODE','ENTREPRISE','REPRESENTANT','TYPE','STATUS',"TAXE","DATE D'ADHESION","PLUS D'INFOS"]}
                        body={marchants.slice(0,10).map((seller,index)=>([
                            seller.merchantUid,
                            index+1,
                            seller.merchantCode,
                            seller.merchantName,
                            seller.representativeName,
                            seller.businessType,
                            seller.status,
                            seller.tinNumber,
                            new Date(seller.joinedDate).toJSON().slice(0, 10)
                        ]))}
                        />
                        : <div className='not-found'>Pas de Marchants</div>
                    }
          </div>
        </div>
    </div>
  )
}

export default Dashboard