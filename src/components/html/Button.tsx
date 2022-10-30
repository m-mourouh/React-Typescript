// Wrapping html elements   

type ButtonProps = {
    variant: "primary" | "secondary"
    children: string            //I added children  to restrict children to only string
} & Omit<React.ComponentProps<'button'>, 'children'>   // & ->  and includes  &  Omit children from React.ComponentProps<'button'> 
 
// we want to restrict children to string only 
// using Omit<,>  to remove properties from a type  



// & : means here that ButtonProps includes also

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${variant}-button`} {...rest}>{children}</button>
  )
}

export default CustomButton;