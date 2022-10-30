// Restricting Props with Typescript  
// Pass only one prop (isPositive |isNegative | isZero)
// with interfaces 
interface RandomNumber {
    value: number
}
interface PositiveNumber  extends RandomNumber  {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
interface NegativeNumber extends RandomNumber {
    isNegative: boolean
    isPositive?: never
    isZero?: never 
}

interface Zero extends RandomNumber {
    isZero: boolean
    isPositive?: never
    isNegative?: never 
}

// union types can only be achieved with the type keyword 
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero ;

// with types 
// type RandomNumber = {
//     value: number
// }
// type PositiveNumber  =  RandomNumber & {
//     isPositive: boolean
//     isNegative?: never
//     isZero?: never
// }
// type NegativeNumber = RandomNumber & {
//     isNegative: boolean
//     isPositive?: never
//     isZero?: never 
// }

// type Zero =  RandomNumber & {
//     isZero: boolean
//     isPositive?: never
//     isNegative?: never 
// }

// // union types can only be achieved with the type keyword 
// type RandomNumberProps = PositiveNumber | NegativeNumber | Zero ;




const RandomNumber = ({value,isPositive,isNegative,isZero}: RandomNumberProps) => {
  return (
    <div>{value} {isPositive && "Positive"} {isNegative && "Negative"} {' '} 
    {isZero && "Zero"}
    </div>
  )
}

export default RandomNumber