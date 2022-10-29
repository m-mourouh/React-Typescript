// ! children prop (string type)
type HeadingProps = {
  children: string
}

const Heading = (props: HeadingProps) => {
  return (
    <h1>{props.children}</h1>
  )
}

export default Heading