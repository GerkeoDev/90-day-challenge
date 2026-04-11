import React, { useState } from "react";
const NumberCounter = () => {
    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
        setCount(parseInt(count)+1)
    }
    const handleClickSubstract = () => {
        setCount(parseInt(count)-1)
    }
    const handleChange = (e) => {
        setCount(e.target.value)
    }
    return (
        <div>
            <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <h1>Numbers</h1>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <button className="symbol" onClick={handleClickSubstract}>-</button>
                    <input 
                        type="number" 
                        value={count} 
                        onChange={handleChange}
                        // style={{
                        //     backgroundColor: "gray",
                        //     color: "white",
                        // }}
                    />
                    <button className="symbol" onClick={handleClickAdd}>+</button>
                </div>
        </div>
    )
}
export default NumberCounter