import styled from "styled-components";
const PaidedColor = ({ paid }) => {
    if (paid) {
        return "#35D3A3"
    }
  else {
        return "#f68900"
    }
}

const PaidedBackGroundColor = ({ paid }) => (paid) ? "#e4ffe8" : "#ffefe4";
const Btn = styled.button`
color:${PaidedColor};
background:${PaidedBackGroundColor};
width: 120px;
margin: 0 15px;
padding:12px 10px;
border: 0;
border-radius: 3px;
font-weight: 700;
display: flex;
text-align: center;
justify-content:center;
align-items: center;
gap: 8px;
`

const Span=styled.span `
display: block;
width: 8px;
height: 8px;
border-radius: 50%;
text-align: center;
background: ${PaidedColor};
`
export {Span}
export {Btn}