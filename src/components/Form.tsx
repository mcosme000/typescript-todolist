import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../context/Task";
import AtomInputField from "./atoms/AtomInputField";
import AtomButton from "./atoms/AtomButton";
import ArrowRight from "./media/icons/ArrowRight";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { addTask } = useContext(TaskContext)

  const formSubmit = (data: any) => {
    addTask(data)
  }

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="mt-3 w-full"
    >
      <div className="flex justify-between">
        <AtomInputField
          {...register("name")}
          type="text"
          // eslint-disable-next-line react/style-prop-object
          style="grow border-b focus:outline-dashed focus:rounded-md"
        />
        <AtomButton
          type="pl-5 text-slate-400"
          children={<ArrowRight />}
        />
      </div>
      {/* <label htmlFor="">important</label>
      <input type="radio" {...register("priority")}/> */}
    </form>
  )
}

export default Form;
