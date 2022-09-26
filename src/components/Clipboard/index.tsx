import clipboardImg from "../../assets/Clipboard.svg";
import { ClipboardContainer } from "./styles";

export function Clipboard() {
  return (
    <ClipboardContainer>
      <img src={clipboardImg} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </ClipboardContainer>
  );
}
