import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'; 

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
})

type NewTransactionForm = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

  const { 
    register,
    handleSubmit
  } = useForm<NewTransactionForm>(
    { resolver: zodResolver(newTransactionFormSchema)}
  );

  async function handleNewTransaction (data: NewTransactionForm) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição"
            {...register('description')}
          />

          <input 
            type="number" 
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}  
          />

          <input 
            type="text"
            placeholder="Categoria"
            {...register('category')} 
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
