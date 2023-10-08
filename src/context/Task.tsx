import { createContext, useState } from "react";

type Task = {
  id?: number,
  name: string,
  priority: number,
  completed: boolean
}

export type TaskContextType = {
  taskList: Task[],
  addTask: (task: Task) => void
}

const defaultTaskContext = {
  taskList: [],
  addTask: () => undefined
}

export const TaskContext = createContext<TaskContextType>(defaultTaskContext);

export const TaskProvider = ({children}: { children: React.ReactNode }) => {
  const [ taskList, setTaskList] = useState<Task[]>([
    {
      id: 1,
      name: "Clean the floor",
      priority: 3,
      completed: false
    },
    {
      id: 2,
      name: "Water the plants",
      priority: 1,
      completed: false
    }
  ]);

  const addTask = ({name, priority}: Task) => {
    const newTask = {
      id: taskList.length + 1,
      name: name,
      priority: priority,
      completed: false
    }
    setTaskList([...taskList, newTask])
  }

  const TaskContextValue = {
    taskList: taskList,
    addTask: addTask
  }

  return (
    <TaskContext.Provider value={TaskContextValue}>
      {children}
    </TaskContext.Provider>
  )
}
