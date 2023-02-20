import React from "react";
import style from './button.module.css';
const Button=(promp)=>{
const {value,children,...rest}=promp
return <button className={style.button} {...rest}>{children}</button>

}
export default Button