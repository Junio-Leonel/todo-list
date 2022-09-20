import { PlusCircle } from "phosphor-react";
import { AddNewTaskContainer } from "./styles";

export function AddNewTask() {
  return (
    <AddNewTaskContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button">
        Criar
        <PlusCircle size={18} />
      </button>
    </AddNewTaskContainer>
  );
}
