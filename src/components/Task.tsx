type TaskProps= {
  name: string,
  priority: number,
  completed: boolean
}

const Task = ({name, priority, completed}: TaskProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{priority}</p>
      <input type="checkbox" defaultChecked={completed}/>
    </div>
  )
}

export default Task;
