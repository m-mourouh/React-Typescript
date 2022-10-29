import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text, width: "200px", height: "200px"}}>This is a box</div>
  )
}

export default Box
