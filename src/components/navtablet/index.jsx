import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from 'react-icons/bs';
import image from '../assets/images.jpg'
const Navbar = ({functions}) => {
  const [ open, setOpen ] = functions;
  // const {setTheme}=props
  // console.log(props,"theme")
  // const [theme, setTheme] = useState('light');
  function darkTema() {
    // document.body.classList.toggle("darkmode");
    // document.querySelector(".invoiceUser").classList.toggle("")
  }
  function changeTheme() {
    if (functions[0]) {
      setOpen(false);
  }
  console.log(functions[0])
  //   if (functions.modalOpen) {
  //     setOpen(false);
  // }
  }
  return <nav>
    <div className="logo">logo</div>
    <div className="panel" >
      {/* {theme} */}
      {/* <span className="sun"  onClick={changeTheme}> <MdDarkMode/></span> */}
      <span className="moun" onClick={changeTheme}><BsSunFill /></span>
      <div className="userImage" ><img src={image} alt="" /></div>
    </div>
  </nav>
}
export default Navbar
