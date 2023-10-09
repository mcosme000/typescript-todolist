import { forwardRef } from "react";

type InputFieldProps = {
  type: string,
  label?: string,
  style?: string
}

const AtomInputField = forwardRef<HTMLInputElement, InputFieldProps>(({type, label, style, ...props}, ref) => {
  const classnames = `w-full p-2 mb-4 ${style}`

  return (
    <>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type={type}
        {...props}
        className={classnames}
      />
    </>
  )
});

export default AtomInputField;
