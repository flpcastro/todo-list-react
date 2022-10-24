import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

import { v4 as uuidV4 } from 'uuid';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidV4(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task;
    })

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>
    </>
  )
}

export default App
