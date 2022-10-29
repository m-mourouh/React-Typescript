// ! Style prop
type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>Some container text</div>
  )
}

export default Container
