import { forwardRef } from "react";

type InputFieldProps = {
  type: string,
  label: string
}

const AtomInputField = forwardRef<HTMLInputElement, InputFieldProps>(({type, label, ...props}, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input
        ref={ref}
        type={type}
        {...props}
      />
    </div>
  )
});

export default AtomInputField;
