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

  function deleteTask(taskToDelete: string) {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
  }

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
        <button type="button" onClick={handleAddNewTask}>
          Criar
          <PlusCircle size={18} />
        </button>
      </AppContainer>

      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={handleOnUpdateTask}
      />
    </ThemeProvider>
  );
}
