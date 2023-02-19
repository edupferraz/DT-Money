import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHighlight, TransactionsContainer, TransactionTable } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>19/02/2023</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                   - R$ 59,90
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>19/02/2023</td>
                        </tr>

                        <tr>
                            <td width="50%">Aluguel do apartamento</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                   - R$ 1200,00
                                </PriceHighlight>
                            </td>
                            <td>Casa</td>
                            <td>19/02/2023</td>
                        </tr>
                    </tbody>
                </TransactionTable>   
            </TransactionsContainer>    


        </div>
    )
}   