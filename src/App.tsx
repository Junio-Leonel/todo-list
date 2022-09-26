import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { Task } from "./interfaces/Task";

import { AppContainer } from "./app";

import { GlobalStyle } from "./styles/global";
import { Clipboard } from "./components/Clipboard";
import { TaskAmount } from "./components/TaskAmount";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask() {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTask,
        completed: false,
      },
    ]);

    setNewTask("");
  }

  function handleOnUpdateTask(updatedTask: Task) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }

  function handleOnDeleteTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const isInputEmpty = newTask.length === 0;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <AppContainer>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
        />
        <button
          type="button"
          onClick={handleAddNewTask}
          disabled={isInputEmpty}
        >
          Criar
          <PlusCircle size={18} />
        </button>
      </AppContainer>

      <TaskAmount tasks={tasks} />

      {tasks.length === 0 ? (
        <Clipboard />
      ) : (
        <Tasks
          tasks={tasks}
          onDeleteTask={handleOnDeleteTask}
          onUpdateTask={handleOnUpdateTask}
        />
      )}
    </ThemeProvider>
  );
}
