import styled from "styled-components";
const ButtonColor = ({ type }) => {
    // console.log(type, "paideddddddddd")
    return '#FBF6FB'
}

const ButtonBackGroundColor = ({ type }) => (type == 'edit') ? "#ccc" : (type == 'delete') ? 'red' : "#7C5DF9";
const Btn = styled.button `
color:${ButtonColor};
background:${ButtonBackGroundColor};
    border-radius: 50px;
    border: 1px solid transparent;
    padding: 12px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    margin:0 15px;
`
export { Btn }