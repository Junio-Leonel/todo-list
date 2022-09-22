import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";

import { Task } from "../../interfaces/Task";

import { AmountTaskCompleted } from "../AmountTasksCompleted";

import {
  ItemContent,
  TaskContent,
  TaskListContainer,
  TasksContainer,
} from "./styles";

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (task: string) => void;
  onUpdateTask: (task: Task) => void;
}

export function Tasks({ tasks, onDeleteTask, onUpdateTask }: TasksProps) {
  return (
    <TasksContainer>
      <AmountTaskCompleted />

      <TaskListContainer>
        {tasks.map((task) => {
          return (
            <TaskContent key={task.id} check={task.completed}>
              <ItemContent check={task.completed}>
                <Checkbox.Root
                  className="checkBox"
                  checked={task.completed}
                  onCheckedChange={(checked) =>
                    onUpdateTask({ ...task, completed: checked as boolean })
                  }
                >
                  <Checkbox.Indicator className="check">
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p>{task.description}</p>
              </ItemContent>

              <button onClick={() => onDeleteTask(task.id)}>
                <Trash size={18} />
              </button>
            </TaskContent>
          );
        })}
      </TaskListContainer>
    </TasksContainer>
  );
}
