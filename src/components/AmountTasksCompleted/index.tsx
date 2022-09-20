import { AmountTaskContainer } from "./styles";

export function AmountTaskCompleted() {
  return (
    <AmountTaskContainer>
      <div className="taskCreate">
        <span>Tarefas criadas</span>
      </div>

      <div className="taskCompleted">
        <span>Concluídas</span>
      </div>
    </AmountTaskContainer>
  );
}
