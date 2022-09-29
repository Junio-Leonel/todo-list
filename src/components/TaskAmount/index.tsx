import { Task } from "../../interfaces/Task";
import { TaskAmountContainer } from "./styles";

interface TaskAmountProps {
  tasks: Task[];
}

export function TaskAmount({ tasks }: TaskAmountProps) {
  const isTaskCompleted = tasks.filter((task) => {
    return task.completed === true;
  });

  return (
    <TaskAmountContainer>
      <div>
        <span>Tarefas criadas</span>
        <span>{tasks.length}</span>
      </div>

      <div>
        <span>Concluídas</span>
        <span>{`${isTaskCompleted.length} de ${tasks.length}`}</span>
      </div>
    </TaskAmountContainer>
  );
}
