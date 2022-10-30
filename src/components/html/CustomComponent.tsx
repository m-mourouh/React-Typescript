

// Imagine we want to use the same props of Greet component so we can either 
// export the type or use this way : React.Component<typeof Greet>

import Greet from "../Greet"


const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}

export default CustomComponent