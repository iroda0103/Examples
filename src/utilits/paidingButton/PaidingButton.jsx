import React, { Children } from "react";
import {Btn,Span} from "./style";
const PadingButton=({
    paid,
    children
})=>{
// console.log(paid)
    return <Btn paid={paid}>
       <Span paid={paid}></Span>
        {(paid)?"Paid":"Pending"}
    </Btn>
}
export default PadingButton