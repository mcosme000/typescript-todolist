import { useForm } from "react-hook-form";
import AtomInputField from "./atoms/AtomInputField";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const formSubmit = (data: any) => {
    console.log(data);
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
