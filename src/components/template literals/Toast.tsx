// react host toast : is library for notifications 

/* 
        Position prop can be one of : 
        "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | 
        "right-center" | "right-top" | "right-bottom"
*/
// ? instead of hard writing this we can use template literals to achieve this 

type HorizontalPositions = "left" | "center" | "right" ;
type VerticalPositions = "top" | "center" | "bottom" ;

type ToastPosition = {
    //we don't want "center-center" but "center" so we use Exclude
    position: Exclude<`${HorizontalPositions}-${VerticalPositions}`,"center-center"> | "center"    
}


const Toast = ({ position }: ToastPosition) => {
  return <div>Toast position is : {position}</div>

}

export default Toast