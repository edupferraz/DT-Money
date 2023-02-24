import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { SearchForm } from "./SearchForm"
import { PriceHighlight, TransactionsContainer, TransactionTable } from "./styles"

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {

    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>

                <SearchForm/>

                <TransactionTable>
                    <tbody>

                        {
                            transactions.map(transactions => {
                                return (
                                    <tr key={transactions.id}>
                                        <td width="50%">{transactions.description}</td>
                                        <td>
                                            <PriceHighlight variant={transactions.type}>
                                                {transactions.price}
                                            </PriceHighlight>
                                        </td>
                                        <td>{transactions.category}</td>
                                        <td>{transactions.createdAt}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </TransactionTable>   
            </TransactionsContainer>    


        </div>
    )
}   
