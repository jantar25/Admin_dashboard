import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';

import { getTransactions } from '../../Redux/apiCalls';
import Table from '../../components/Table/Table';
import Cards from '../../components/Cards/Cards';
import {transactionCardItems} from '../../constants/cards';

const ClientTransaction = () => {
  const dispatch = useDispatch()
  const {transactions,isFetching} = useSelector(state => state.transactions)

  useEffect(() => {
      getTransactions(dispatch)
    }, [dispatch])

  return (
      <div className='dashboard-content'>
        <Cards cardItems={transactionCardItems} />
        <div className='dashboard-content-container'>
            {isFetching && <div className='loading'>Telechargement...</div>}
            {transactions.length > 0? 
                <Table 
                    head={['No','DATE','No TRANSACTION','CLIENT','PHONE','MARCHANT','CODE','MONTANT','FRAIS','ID','No REF','STATUT','TYPE','No LIQIDATION']}
                    body={transactions.map((transaction,index)=>([
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
  )
}

export default ClientTransaction