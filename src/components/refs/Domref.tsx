import { useRef, useEffect } from "react";

const Domref = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    // (?) optional 
    // (!) not null or not false 

useEffect(() => {
        // inputRef.current?.focus();
        inputRef.current.focus();  //we removed the ? because we added ! up
},[])
  return (
    <div>
        <input type="text"  ref={inputRef} />
    </div>
  )
}

export default Domref;