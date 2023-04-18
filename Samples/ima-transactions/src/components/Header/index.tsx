import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import { NewTransactionModal } from "../NewTransactionModal";
import { Magnet } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
          <Magnet size={64} color={"#005F87"} />


      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
