// import classNames from "classnames";

type Button = {
  type?: string,
  onClick?: () => void,
  children: any
}

const AtomButton = ({type, onClick, children}: Button ) => {
  const classNames = `text-sm text-white font-bold ${type}`
  return (
    <button
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  )
}

export default AtomButton;
