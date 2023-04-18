import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome'
  createdAt: string;
}

export function Transactions() {

  async function loadTransactions() {
    const response = await fetch('http://localhost:7049/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              const {
                id,
                description,
                price,
                category,
                type,
                createdAt
              } = transaction

              return (
                <tr key={id} >
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>
                      R$ {price}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
