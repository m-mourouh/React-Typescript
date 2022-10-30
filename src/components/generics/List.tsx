

interface ListProps<T> {
    list: T[];
    onClick: (item: T) => void
}

const List = <T extends number | string>({list, onClick}: ListProps<T>) => {
  return (
    <ul>
        {list.map((item,idx) => {
            return(
                <li>{item}</li>
            )
        })}
    </ul>
  )
} 
 
export default List
