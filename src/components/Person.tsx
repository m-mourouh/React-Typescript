import { PersonProps } from "./Person.types";  //(Export types ) (Tip 2)


// ! object props 

const Person = (props: PersonProps) => {
  return (
    <div>
        <h1>{props.name.first}  {props.name.last}</h1>
    </div>
  )
}

export default Person