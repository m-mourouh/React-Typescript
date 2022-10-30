import "./App.css";
import Container from "./components/Container";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import LoggedIn from "./components/state/LoggedIn";
import Counter from "./components/state/Counter";
import User from "./components/state/User";
import Box from "./components/contexts/Box";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";
import Userr from "./components/contexts/User";
import { UserContextProvider } from "./components/contexts/UserContext";
import Domref from "./components/refs/Domref";
import MutabaleRef from "./components/refs/MutabaleRef";
import { Counterr } from "./components/class/Counterr";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/template literals/Toast";
import CustomButton from "./components/html/Button";
import CustomInput from "./components/html/Input";
import CustomComponent from "./components/html/CustomComponent";
function App() {
  const person = {
    first: "Mark",
    last: "Doe",
  };
  const nameList = [
    {
      first: "Jack",
      last: "Boe",
    },
    {
      first: "Bark",
      last: "Hark",
    },
    {
      first: "Fark",
      last: "Nark",
    },
  ];
  return (
    <div className="App">
      {/* number, string , boolean props */}
      <h1>number, string, boolean props</h1>
      <Greet name="John" messageCount={20} isLoggedIn={false} />
      <hr />
      <h1>object props</h1>
      {/* object props */}
      <Person name={person} />
      <hr />
      <h1>array props</h1>
      {/* array props */}
      <PersonList names={nameList} />
      <hr />
      <h1>union of string literal props</h1>
      {/* union of string literal props */}
      <Status status="success" />
      <hr />
      <h1>string children</h1>
      {/* children string type */}
      <Heading>This is the heading text</Heading>
      <hr />
      <h1>ReactNode children</h1>
      {/* children Element type */}
      <Oscar>
        <Heading>This is the Oscar text</Heading>
      </Oscar>
      <hr />
      <h1>Optional props</h1>
      {/* Optional props */}
      <Greet name="Marie" isLoggedIn={true} />
      {/*________________Event props__________________*/}
      <hr />
      <h1>TS & Click Event</h1>
      {/* Click Event */}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <hr />
      <h1>TS & Change Event</h1>
      {/* Change Event */}
      <Input
        value=""
        changeHandle={(event) => {
          console.log(event);
        }}
      />
      <hr />
      <h1>Typescript & Style props</h1>
      {/* style props */}
      <Container styles={{ border: "1px solid red", padding: "20px" }} />
      <hr />
      <h1>Typescript & UseState</h1>
      {/* useState Hook */}
      {/* for simple types  */}
      <LoggedIn />
      {/* for complex types */}
      <User />
      <hr />
      <h1>Typescript & UseReducer</h1>
      {/* useReducer Hook */}
      <Counter />
      <hr />
      <h1>Typescript & UseContext | TS inference</h1>
      {/* useContext Hook */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <h1>Typescript & UseContext | UserContext</h1>
      <UserContextProvider>
        <Userr />
      </UserContextProvider>
      <hr />
      <h1>Typescript & useRef | Domref</h1>
      <Domref />
      <h1>Typescript & useRef | MutableRef</h1>
      <MutabaleRef />
      <hr />
      <h1>Typescript & class | typing props & states </h1>
      <Counterr message="The value of the counter is " />
      <hr />
      <h1>Typescript & Component prop | passing a component as prop </h1>
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <h1>Typescript & Generics</h1>
      <List
        list={["Bruce", "John", "Jae"]}
        onClick={(item) => console.log(item)}
      />
      <List list={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <hr />
      <h1>Typescript & Restricting Props</h1>
      <RandomNumber value={20} isPositive />
      <hr />
      <h1>Typescript | Template literals & Exclude</h1>
      <Toast position="center" />
      <hr />
      <h1>Wrapping HTML Element</h1>
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
          {/* <div>Primary Button</div>   ->  it doesn't accept  ReactNode Elem */}   
          Primary Button      
      </CustomButton>
      <CustomInput  placeholder="Full name" />
      <hr />
      <h1>Extracting a Components Prop Types</h1> 
      <CustomComponent  name="Mohamed"  isLoggedIn/>
    </div>
  );
}

export default App;
