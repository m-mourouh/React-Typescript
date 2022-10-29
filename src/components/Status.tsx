// ! union of string literal

type StatusProps = {
    status: "loading" | "success" | "error";
}

const Status = (props: StatusProps) => {
    let message;
    if(props.status === "loading") message = "Loading...";
    else if(props.status === "success") message = "Data fetched successfully";
    if(props.status === "error") message = "Error: unable to fetch data";
  return (
    <div>{message}</div>
  )
}

export default Status