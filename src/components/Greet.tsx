// use types when building applications 
// use interfaces when building libraries

// ! number, string, boolean props

type GreetProps = {
    name: string,
    messageCount?: number,  // ? added to say that this prop is optional 
    isLoggedIn: boolean 
}


const Greet = (props: GreetProps) => {
  // initialize message with 0 
  const {messageCount = 0 } = props;
  return (
    <div>
        <h2>
            {props.isLoggedIn ? `Welcome ${props.name}! you have ${messageCount} unread messages` : "Welcome Guest" }
        </h2>
    </div>
  )
}

export default Greet