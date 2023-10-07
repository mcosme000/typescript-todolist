import Task from "./Task";
import { useContext } from "react"
import { TaskContext } from "../context/Task";

const List = () => {
  const { taskList } = useContext(TaskContext)
  console.log(taskList);

  const renderTasks = taskList.map((task) => {
    return (
      <Task
        key={task.id}
        name={task.name}
        priority={task.priority}
        completed={task.completed}
      />
    )
  })
  return (
    <div>
      <p>List</p>
      {renderTasks}
    </div>
  )
}

export default List;
