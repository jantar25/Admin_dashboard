import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';

import Cards from '../../components/Cards/Cards';
import { getTransactions } from '../../Redux/apiCalls';
import { cardItemsClients } from '../../constants/cards';
import Table from '../../components/Table/Table';
import './Transactions.css'

const Transactions = () => {
    const dispatch = useDispatch()
    const {transactions,isFetching} = useSelector(state => state.transactions)
    console.log(transactions)

    useEffect(() => {
        getTransactions(dispatch)
      }, [dispatch])

  return (
    <div className='dashboard-content'>
    <Cards cardItems={cardItemsClients} /> 
    <div className='dashboard-content-container'>
        {isFetching && <div className='loading'>Telechargement...</div>}
        {transactions.length > 0? 
            <Table 
                head={['ID','REF NUMBER','PAYANT','MONTANT','OPERATEUR',"MARCHANT"]}
                body={transactions.map(transaction=>([
                    transaction.transactionUid,
                    transaction.referenceNumber,
                    transaction.serviceChargePaidBy,
                    transaction.paidAmount,
                    transaction.merchantNames,
                    new Date(transaction.transactionDate).toJSON().slice(0, 10)
                ]))}
                />
                : <div className='not-found'>Pas de clients</div>
            }
    </div>
</div>
  )
}

export default Transactions