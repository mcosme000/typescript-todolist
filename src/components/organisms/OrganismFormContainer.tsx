import { useContext } from "react";
import { TaskContext } from "../../context/Task";

import Form from "../Form"
import AtomButton from "../atoms/AtomButton";
import PlusIcon from "../media/icons/PlusIcon";
import CloseIcon from "../media/icons/CloseIcon";

const OrganismFormContainer = () => {
  const { displayForm, showForm } = useContext(TaskContext)

  return (
    <section className="p-5 flex flex-col justify-center items-center relative">
      <AtomButton
        type="w-[50px] h-[50px] flex items-center justify-center absolute top-[-30px] rounded-full bg-cyan-700 hover:bg-cyan-800"
        children={showForm ? <CloseIcon /> : <PlusIcon />}
        onClick={() => displayForm()}
      />
      {showForm && <Form />}
    </section>
  )
}

export default OrganismFormContainer;
