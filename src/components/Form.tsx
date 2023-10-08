import { useForm } from "react-hook-form";
import AtomInputField from "./atoms/AtomInputField";
import { useContext } from "react";
import { TaskContext } from "../context/Task";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { addTask } = useContext(TaskContext)

  const formSubmit = (data: any) => {
    addTask(data)
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <AtomInputField {...register("name")} type="text" label="New task"/>
      <AtomInputField {...register("priority")} type="number" label="Priority" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
