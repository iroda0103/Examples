import React, { useState } from "react";
const useInputValue=(initialValue)=> {
    const [name, setName] = useState(initialValue);
    let timer;
    const handleInputChange = (e) => {
        setName(e.target.value)
        clearInterval(timer)
    }
    return [name, handleInputChange]
}
export default useInputValue