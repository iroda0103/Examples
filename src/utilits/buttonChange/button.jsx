import React, { Children } from "react";
import { Btn } from "./style";
const ButtonChange = (props) => {
    const {type, ...rest}=props;
    // console.log(type)
    return <Btn type={type} {...rest}>
        {props.children}
    </Btn>
}
export default ButtonChange