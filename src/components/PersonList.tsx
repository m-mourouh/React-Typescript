import {Name} from "./Person.types";

// ! array props


type PersonListProps = {
    names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <ul>
        {props.names.map((name,idx) => (
            <li key={idx}>{name.first}  {name.last}</li>
        ))}
    </ul>
  )
}

export default PersonList