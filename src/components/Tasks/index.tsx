import { Trash } from "phosphor-react";
import { AmountTaskCompleted } from "../AmountTasksCompleted";
import {
  ItemContent,
  ItemContentCompleted,
  TaskContent,
  TaskContentCompleted,
  TaskListContainer,
  TasksContainer,
} from "./styles";

export function Tasks() {
  return (
    <TasksContainer>
      <AmountTaskCompleted />

      <TaskListContainer>
        <TaskContent>
          <ItemContent>
            <input type="checkbox" />
            <p>Tomar café da manhã</p>
          </ItemContent>
          <button>
            <Trash size={18} />
          </button>
        </TaskContent>

        <TaskContent>
          <ItemContent>
            <input type="checkbox" />
            <p>Tomar banho as 7:00</p>
          </ItemContent>
          <button>
            <Trash size={18} />
          </button>
        </TaskContent>

        <TaskContentCompleted>
          <ItemContentCompleted>
            <input type="checkbox" checked={true} />
            <p>Estudar React e JavaScript</p>
          </ItemContentCompleted>
          <button>
            <Trash size={18} />
          </button>
        </TaskContentCompleted>

        <TaskContentCompleted>
          <ItemContentCompleted>
            <input type="checkbox" checked={true} />
            <p>Trabalhar as 17:00 e chegar em casa as 05:00</p>
          </ItemContentCompleted>
          <button>
            <Trash size={18} />
          </button>
        </TaskContentCompleted>
      </TaskListContainer>
    </TasksContainer>
  );
}
