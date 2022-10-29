type ChangeHandle = {
    value: string,
    changeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value,changeHandle}: ChangeHandle) => {  // props destructuring  (Tip 1)
  return <input value={value} onChange={(event) => changeHandle(event)} />
}

export default Input
